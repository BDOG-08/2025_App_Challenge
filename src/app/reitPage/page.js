'use client';
import Link from "next/link";
import "./reitPage.css";

export default function REITPage() {
    return (
        <div>
            <div className="section1">
                <div className='header1'>
                    <h1>REIT</h1>
                </div>

                <div className='generalColumn'>
                    <h2 className='generalHeader'>What is a REIT?</h2>
                    <p className='generalParagraph'>
                        REITs (Real Estate Investment Trusts) are companies that own, operate, and finance income-producing real estate across various sectors. They allow investors to earn income from real estate without buying or managing properties directly. REITs were created in 1960 to enable smaller investors to invest in large properties like skyscrapers, shopping malls, or apartment complexes. By pooling capital from many investors, REITs have funded a large portion of U.S. real estate.
                    </p>
                </div>

                <div className='generalColumn'>
                    <h3 className='generalHeader'>How Does It Work?</h3>
                    <p className='generalParagraph'>
                        REITs raise money from investors to manage a portfolio of real estate or financial assets like mortgages. They collect rent or interest and distribute earnings to shareholders. To qualify as a REIT, at least 75% of assets must be in real estate, and 90% of taxable income must be paid as dividends. REITs receive special tax treatment in exchange for following these rules.
                    </p>
                </div>

                <div className='generalColumn'>
                    <h4 className='generalHeader'>How to Invest in a REIT</h4>
                    <p className='generalParagraph'>
                        Investors can buy publicly traded REITs like stocks or invest via mutual funds or ETFs that hold REITs. These provide diversification without needing to research each REIT individually.
                    </p>
                </div>

                <div className='generalColumn'>
                    <h5 className='generalHeader'>Different Types of REITs</h5>
                    <ul className='generalParagraph'>
                        <li className="generalBulletPoint">
                            <b>Equity REITs:</b> Own and manage income-generating properties. Revenues come mainly from rent.
                        </li>
                        <li className="generalBulletPoint">
                            <b>Mortgage REITs:</b> Provide loans for real estate or acquire mortgage-backed securities. Earnings are mainly from interest spread.
                        </li>
                        <li className="generalBulletPoint">
                            <b>Hybrid REITs:</b> Combine strategies of equity and mortgage REITs. These are now less common after 2008 due to regulations.
                        </li>
                    </ul>
                </div>

                <div className='generalColumn'>
                    <h6 className='generalHeader'>What Makes a REIT a REIT?</h6>
                    <p className='generalParagraph'>
                        REITs generally lease space, collect rent, and distribute income as dividends. Mortgage REITs earn from financing real estate. To qualify, REITs must meet IRS requirements:
                    </p>
                    <ul className="generalParagraph">
                        <li className="generalBulletPoint">Invest at least 75% of assets in real estate, cash, or U.S. Treasuries</li>
                        <li className="generalBulletPoint">Derive at least 75% of gross income from rent, mortgage interest, or real estate sales</li>
                        <li className="generalBulletPoint">Pay at least 90% of taxable income as dividends</li>
                        <li className="generalBulletPoint">Be a taxable corporation</li>
                        <li className="generalBulletPoint">Have a board of directors or trustees</li>
                        <li className="generalBulletPoint">Have at least 100 shareholders</li>
                        <li className="generalBulletPoint">Have no more than 50% of shares held by five or fewer individuals</li>
                    </ul>
                </div>

                <div className='generalColumn'>
                    <h9 className='generalHeader'>Are REITs Good Investments?</h9>
                    <p className='generalParagraph'>
                        REITs can provide steady income through dividends, diversification, and real estate exposure without direct property ownership. They historically offer competitive returns and may hedge against inflation. However, they are sensitive to interest rates, economic downturns, and sector-specific risks.
                    </p>
                </div>
            </div>

            <div className="section2">
                <Link href="/">
                    <button className="homeButton">Home</button>
                </Link>
            </div>

            <div className="citations">
                <h10 className="generalHeader">Citations</h10>
                <ul className="generalParagraph">
                    <li><a href="https://www.investopedia.com/terms/r/reit.asp" target="_blank">Investopedia: REIT</a></li>
                    <li><a href="https://www.sec.gov/fast-answers/answersreitshtm.html" target="_blank">SEC: Real Estate Investment Trusts (REITs)</a></li>
                </ul>
            </div>
        </div>
    )
}