import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug") ?? "unlock-the-power-of-daily-ai-content-with-marketpilots-auton-865906";
  const url = `https://api.marketpiloting.com/public/blog-posts/${slug}`;
  
  let result: any = { url, slug };
  
  try {
    const res = await fetch(url, { cache: "no-store" });
    result.status = res.status;
    result.ok = res.ok;
    result.headers = Object.fromEntries(res.headers.entries());
    if (res.ok) {
      const data = await res.json();
      result.title = data.title;
      result.has_body = !!data.body;
      result.body_length = data.body?.length;
    } else {
      result.body = await res.text();
    }
  } catch (e: any) {
    result.error = e.message;
    result.error_type = e.constructor.name;
  }
  
  return NextResponse.json(result);
}
