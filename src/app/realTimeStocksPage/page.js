// 'use client'
// import Link from 'next/link';
// import { useState, useEffect } from 'react';

// export default async function StocksAPIGetter({ params}) {
//     const { symbol } = params;
//     const res = await fetch(`/api/alpha/daily/${symbol}`, { cache: 'no-store', });
//     const data = await res.json();

//     return <RealTimeStocksPage symbol={symbol} data={data}></RealTimeStocksPage>
// }

// export default async function RealTimeStocksPage({ symbol, data }){
//     const { symbol } = params;
//     const [data, setData] = useState(null);
//     const [err, setError] = useState(null);

//     useEffect(() => {
//         fetch(`/api/alpha/daily/${symbol}`, { cache: 'no-store' })
//             .then(r => r.json())
//             .then(d => (d.error ? setError(d.error) : setData(d)))
//             .catch(e => setError(e.message));
//     }, [symbol]);

//     if(err) return <p>Loser: {err}</p>;
//     if(!data) return <p>Loading...</p>;

//     const series = data['Time Series Daily:'] || {};
//     const rows = Object.entries(series).concat(0, 10);

//     return(
//         <div>
//             <h1>Daily</h1>
//             <table border="1">
//                 <thead>
//                     <tr>
//                         <th>Date</th>
//                         <th>Open</th>
//                         <th>High</th>
//                         <th>Low</th>
//                         <th>Close</th>
//                         <th>Volume</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {rows.map(([date, bar]) => (
//                         <tr key={date}>
//                             <td>{date}</td>
//                             <td>{bar['1. open']}</td>
//                             <td>{bar['2. high']}</td>
//                             <td>{bar['3. low']}</td>
//                             <td>{bar['4. close']}</td>
//                             <td>{bar['5. volume']}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <Link href="/">
//                 <button className="HomeButton">Home</button>
//             </Link>
//         </div>
//     )
// }