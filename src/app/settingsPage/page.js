'use client';
import { Link } from 'next/link';
import "./settingsPage.css";

export default function settingsPage(){
    return(
        <div>
            <Link href="/">
                <button className="HomeButton">Home</button>
            </Link>
        </div>
    )
}