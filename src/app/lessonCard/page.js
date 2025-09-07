'use client';
import "./LessonCard.css";
import Link from "next/link";

function Lesson({ title, image, link }) {
  return (
    <div className="lesson">
      <h3 className="title">{title}</h3>
      <img className="lessonImage" src={image} alt={title} />
      <Link href={link}>
        <button className="ResumeButton">Resume</button>
      </Link>
    </div>
  );
}

export default function LessonLinks() {
  const books = [
      { name: "Money 101", img: "https://th.bing.com/th/id/OIP.2CZyqkSC8DEAssgnUJjPAgHaDt?w=314&h=174&c=7&r=0&o=5&pid=1.7", link: "money101Page" },
      { name: "Stocks", img: "https://th.bing.com/th/id/OIP.tVTO8Flx-MubmG5l_sKP0wHaEK?w=331&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", link: "stocksPage" },
      { name: "REIT", img: "https://th.bing.com/th/id/OIP.Axap0zBuHYU2HDTuM9qTIQHaE7?w=270&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", link: "reitPage" },
      { name: "Crypto Currencies", img: "https://th.bing.com/th/id/OIP.-22BoK-eq92r680-dZY4HgHaEc?w=257&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", link: "cryptoCurrencyPage" },
      { name: "ETF", img: "https://th.bing.com/th/id/OIP.wZNAHA8XyZJPr_ITMTfNxQHaEo?w=292&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", link: "etfPage" },
      { name: "How to spend money", img: "https://th.bing.com/th/id/OIP.EBRRoPgx7b6H9n4qC09mWQHaE8?w=250&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", link: "howToSpendMoneyPage" },
  ];

  return (
    <div className="lessonCard">
      {books.map((lesson, index) => (
        <Lesson key={index} title={lesson.name} image={lesson.img} link={lesson.link} />
      ))}
    </div>
  );
}

