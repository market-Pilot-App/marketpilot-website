import { NextRequest, NextResponse } from "next/server";
import { writeFile, readFile } from "fs/promises";
import path from "path";

const INGEST_SECRET = process.env.BLOG_INGEST_SECRET;
const VERCEL_DEPLOY_HOOK = process.env.VERCEL_DEPLOY_HOOK_URL;

const DB_PATH = path.join(process.cwd(), "public", "blog-posts.json");

async function readPosts(): Promise<object[]> {
  try {
    const raw = await readFile(DB_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function POST(req: NextRequest) {
  // Auth
  const auth = req.headers.get("authorization") ?? "";
  const token = auth.replace("Bearer ", "").trim();
  if (!INGEST_SECRET || token !== INGEST_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { title, slug, excerpt, content, tags, featured_image, status } = body;

  if (!title || !slug || !content) {
    return NextResponse.json({ error: "title, slug, content are required" }, { status: 400 });
  }

  const posts = await readPosts();

  // Deduplicate by slug
  const existing = posts.findIndex((p: any) => p.slug === slug);
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const wordCount = content.split(/\s+/).length;
  const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

  const entry = {
    slug,
    title,
    excerpt: excerpt ?? "",
    category: (tags?.[0] ?? "General"),
    date: dateStr,
    readTime,
    image: featured_image ?? "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    body: content,
    tags: tags ?? [],
  };

  if (existing >= 0) {
    posts[existing] = entry;
  } else {
    posts.unshift(entry); // newest first
  }

  await writeFile(DB_PATH, JSON.stringify(posts, null, 2), "utf-8");

  // Trigger Vercel redeploy so the new post goes live
  if (VERCEL_DEPLOY_HOOK) {
    await fetch(VERCEL_DEPLOY_HOOK, { method: "POST" }).catch(() => null);
  }

  return NextResponse.json({
    ok: true,
    url: `https://www.marketpiloting.com/blog/${slug}`,
  });
}
