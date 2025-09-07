import { NextResponse } from "next/server";

export async function GET(_req, { params }) {
    const { symbol } = params;
    const url = new URL('https://www.alphavantage.co/query');
    url.search = new URLSearchParams({
        function: 'TIME_SERIES_DAILY',
        symbol,
        outputsize: 'compact',
        apikey: process.env.NEXT_PUBLIC_ALPHA_VANTAGE_ACCESS_KEY
    });

    const res = await fetch(url, { next: {revalidate: 3600 }});
    const data = await res.json();

    const err = data?.Note || data?.Information || data?.['Error Message'];
    if (err) return NextResponse.json({error: err}, {status: 429});

    return NextResponse.json(data);
}