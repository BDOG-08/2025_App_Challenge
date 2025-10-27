'use client';

import Link from 'next/link'
import LessonLinks from "./lessonCard/page";
import "./globals.css";
import Image from 'next/image';

export default function Home(){
    return(
        <div className="homepage">
            {/* <div className="ButtonContainer">
                <button className="NameButton">Name</button >
                <button className="ProfilePictureButton"></button>
                <Link href="/settingsPage">
                    <button className="SettingsImageButton"><Image className="settingsImage" src="/images/settingsimage.webp" alt='settings image' height={50} width={50} /></button>
                </Link>
            </div> */}
            <div className="navigationContainer">
                <Link href="/realTimeStocksPage">
                    <button className="navButtons">Real Time Stocks</button>    
                </Link>
                <Link href="/newsPage">
                    <button className="navButtons">News</button>
                </Link>
                {/* <Link href="/portfolioPage">
                    <button className="navButtons">Portfolio</button>
                </Link> */}
                {/* <Link href="/practicePage">
                    <button className="navButtons">Practice</button>
                </Link> */}
            </div>
            <div className="lessons">
                <LessonLinks />
            </div>
            <div>
                <Image src="/images/investingMadeEasy.jpg" width={100} height={100} className='logo'></Image>
            </div>
        </div>
    )
}



// 'use client';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./home";
// import RealTimeStocksPage from "./RealTimeStocksPage"
// import NewsPage from "./NewsPage"
// import PortfolioPage from "./portfolioPage"
// import settingsPage from "./settingsPage"
// import money101Page from "./money101Page"
// import reitPage from "./reitPage"
// import etfPage from "./etfPage"
// import stocksPage from "./stocksPage"
// import stockMarketPage from "./stockMarketPage"
// import howToSpendMoneyPage from "./howToSpendMoneyPage.jsx"
// import Practice from "./practicePage";

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/RealTimeStocksPage" element={<RealTimeStocksPage/>} />
//         <Route path="/NewsPage" element={<NewsPage/>} />
//         <Route path="/PortfolioPage" element={<PortfolioPage />} />
//         <Route path="/settingsPage" element={<settingsPage />} />
//         <Route path="/money101Page" element={<money101Page/>} />
//         <Route path="/reitPage" element={<reitPage/>} />
//         <Route path="/etfPage" element={<etfPage/>} />
//         <Route path="/stocksPage" element={<stocksPage/>} />
//         <Route path="/stockMarketPage" element={<stockMarketPage/>} />
//         <Route path="/howToSpendMoneyPage" element={<howToSpendMoneyPage/>} />
//         <Route path="/practice" element={<Practice/>} />
//       </Routes>
//     </Router>
//   );
// }
// import { Link } from "react-router-dom";


