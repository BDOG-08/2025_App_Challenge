'use client';
import { useEffect, useState } from "react";
import './newsPage.css';
import Link from "next/link"

export default function BusinessNewsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setError(null);

    fetch(`/api/nyt/top-stories?section=business`)
      .then(r => {
        if (!r.ok) throw new Error("Failed to fetch stories");
        return r.json();
      })
      .then(d => {
        if (!ignore) setItems(d.items || []);
      })
      .catch(err => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => { ignore = true };
  }, []);

  return (
    <div className="bigBigContainer">
      <h2 className="header">Business News</h2>
      <Link href="/">
        <button>
          Home
        </button>
      </Link>
      {loading && <p>Loading…</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && items.length === 0 && <p>No stories available.</p>}
      {!loading && !error && items.length > 0 && (
        <div className="container">
          {items.map(a => (
            <div className="storyBox" key={a.url}>
              <a href={a.url} target="_blank" rel="noopener noreferrer">{a.title}</a>
              {a.byline && <p>{a.byline}</p>}
              {a.published_date && <small>{new Date(a.published_date).toLocaleDateString()}</small>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
