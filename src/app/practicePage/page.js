'use client';
import Link from 'next/link'

import { useState, useEffect } from 'react';

export default function Practice() {
    const [photos, setPhotos] = useState(null);
    const [query, setQuery] = useState("");

    const fetchRandomImage = async (searchquery) => {
        try {
            const res = await fetch(
                `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchquery)}&per_page=10`,
                {
                    headers: {
                        Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
                    },
                }
            );
            const data = await res.json();
            return data.results;
        } catch(err) {
            console.error('Error fetching image:', err);
        }
    };

    const handleSearch = async() => {
        const results = await fetchRandomImage(query);
        setPhotos(results);
    }

    return (
        <div>
        {/* //     {
        //        photo &&
        //        <img
        //           src={photo.urls.regular}
        //         alt={photo.alt_description || 'Random'}
        //         style={{ maxWidth: 500}}  
        //        >

        //        </img> 
        //     }
        //     <button onClick={fetchRandomImage}>Click for Random Image</button> */}

            <input name="query" value={query} onChange={(e) => setQuery(e.target.value)}placeholder='What photo would you like to see?'/>
            <button onClick={handleSearch}>Submit</button>

            <div>
                {photos.map((photo) => (
                    <img
                        key={photo.id}
                        src={photos.urls.small}
                    ></img>
                ))}
            </div>
            
            <Link href="/">
                <button>Home</button>
            </Link>
        </div>
        
        
        
    )
        
            
    
    
}