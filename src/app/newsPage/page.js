'use client';
import Link from 'next/link'

export default function newsPage(){
    return(
        <div>
            <Link href="/">
                <button className="HomeButton">Home</button>
            </Link>
        </div>
    )
}