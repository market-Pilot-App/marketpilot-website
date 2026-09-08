import { NextRequest, NextResponse } from "next/server";

const INGEST_SECRET = process.env.BLOG_INGEST_SECRET;
const VERCEL_DEPLOY_HOOK = process.env.VERCEL_DEPLOY_HOOK_URL;

export async function POST(req: NextRequest) {
  const auth = req.headers.get("authorization") ?? "";
  const token = auth.replace("Bearer ", "").trim();
  if (!INGEST_SECRET || token !== INGEST_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { slug } = body;
  if (!slug) {
    return NextResponse.json({ error: "slug is required" }, { status: 400 });
  }

  // Trigger Vercel redeploy — new post will be fetched from backend at build time
  if (VERCEL_DEPLOY_HOOK) {
    await fetch(VERCEL_DEPLOY_HOOK, { method: "POST" }).catch(() => null);
  }

  return NextResponse.json({
    ok: true,
    url: `https://www.marketpiloting.com/blog/${slug}`,
  });
}
