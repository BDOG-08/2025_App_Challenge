import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const section = searchParams.get("section") || "economy";

  const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.NEW_YORK_TIMES_ACCESS_KEY}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      return NextResponse.json(
        { error: "NYT fetch failed" },
        { status: res.status }
      );
    }

    const data = await res.json();

    const items = (data?.results || []).map(a => ({
      title: a.title,
      url: a.url,
      byline: a.byline,
      abstract: a.abstract,
      published_date: a.published_date,
      image: a.multimedia?.find(m => m.format === "superJumbo")?.url || null,
      section: a.section,
    }));

    return NextResponse.json({ items });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error", details: err.message },
      { status: 500 }
    );
  }
}
