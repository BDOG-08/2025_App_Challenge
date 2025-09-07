'use client';
import Link from "next/link";
import "./reitPage.css";

export default function PotfolioPage(){
    return(
        <div>
            <Link href="/">
                <button className="HomeButton">Home</button>
            </Link>
        </div>
    )
}