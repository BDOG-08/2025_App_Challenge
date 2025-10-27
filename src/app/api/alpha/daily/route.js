import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const raw = searchParams.get('symbol');

  if (!raw||raw.toLowerCase()==='undefined')
    return NextResponse.json({ error: "Missing symbol" }, { status: 400 });
  
  const symbol = raw.toUpperCase();

  const key = process.env.ALPHA_VANTAGE_ACCESS_KEY;
  if (!key)
    return NextResponse.json({ error: "Missing API key" }, { status: 500 });

  const url = new URL('https://www.alphavantage.co/query');
  url.searchParams.set("function", "TIME_SERIES_DAILY");
  url.searchParams.set("symbol", symbol);
  url.searchParams.set("outputsize", "compact");
  url.searchParams.set("apikey", key);

  try {
    const res = await fetch(url.toString(), { next: { revalidate: 3600 } });
    if (!res.ok) return NextResponse.json({ error: "API fetch failed" }, { status: 502 });

    const data = await res.json();

    const err = data?.Note || data?.Information || data?.['Error Message'];
    if (err) return NextResponse.json({ error: err }, { status: 429 });

    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
