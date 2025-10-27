"use client"
import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import "./RealTimeStocksPage.css";

export default function RealTimeStocksPage({ params }) {
  const [data, setData] = useState(null);
  const [err, setError] = useState(null);
  const [input, setInput] = useState('');
  const [symbol, setSymbol] = useState('');
 
  useEffect(() => {
    if(!symbol) return;
    if(symbol==='UNDEFINED') return
    const controller = new AbortController();
    setError(null);
    setData(null);

    fetch(`/api/alpha/daily?symbol=${encodeURIComponent(symbol)}`, { cache: 'no-store', signal: controller.signal, })
      .then(r => r.json())
      .then(d => (d.error ? setError(d.error) : setData(d)))
      .catch(e => setError(e.message));

    return () => controller.abort();     
  }, [symbol]);

  const series = data?.['Time Series (Daily)'] || {};
  const rows = Object.entries(series).slice(0, 10);

  return (
    <div className='sector1'>
      <h1 className='mainHeader'>Daily</h1>

      <form
        onSubmit={(e)=>{
          e.preventDefault();
          const s = (input||'').trim().toUpperCase();
          if(s) setSymbol(s);
        }}
        className='inputSlot'
      >
        <input
          placeholder="Ticker (e.g., AAPL)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="Ticker"
        />
        <button type="submit" className='loadButton'>Load</button>
      </form>

      {!symbol && <p>Enter a ticker above (e.g., AAPL).</p>}
      {err && <p>Error: {err}</p>}
      {!err && symbol && !data && <p>Loading...</p>}

      <table border="1">
        <thead>
          <tr>
            <th className='generalTableHeaders'>Date</th>
            <th className='generalTableHeaders'>Open</th>
            <th className='generalTableHeaders'>High</th>
            <th className='generalTableHeaders'>Low</th>
            <th className='generalTableHeaders'>Close</th>
            <th className='generalTableHeaders'>Volume</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([date, bar]) => (
            <tr key={date}>
              <td className='tableData'>{date}</td>
              <td className='tableData'>{bar['1. open']}</td>
              <td className='tableData'>{bar['2. high']}</td>
              <td className='tableData'>{bar['3. low']}</td>
              <td className='tableData'>{bar['4. close']}</td>
              <td className='tableData'>{bar['5. volume']}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link href="/">
        <button className="HomeButton">Home</button>
      </Link>
    </div>
  );
}

