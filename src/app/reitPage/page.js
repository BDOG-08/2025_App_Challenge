'use client';
import Link from "next/link";
import "./reitPage.css";

export default function PotfolioPage(){
    return(
        <div>
            <div className="section1">
                <div className='header1'>
                    <h1>
                        REIT
                    </h1>
                </div>
                <div className='generalColumn'>
                    <h2 className='generalHeader'>
                        What is a REIT?
                    </h2>
                    <p className='generalParagraph'>
                        <p>
                                REITs(Real estate inwestment trusts) are companies that own, operate, ans finance income-producing real estate across
                            a wide range of propety sectors. This type of investment is often purchasesd through top brokerage and real estate crowdfunding 
                            platform. REITs allow you to earn money from real estate without having to buy, manage, or finance properties yourself.
                        </p>
                        <p>
                                REITs were created by a law in 1960, and were designed for smaller investors to be able to invest in skyscrapers, shoppping malls, 
                            or apartment complexes as easily as investing in stocks. REITs pool capital from many investors, so it has changed and funded much of American
                            real estate.
                        </p> 
                    </p>
                </div>
                <div className='generalColumn'>
                    <h3 className='generalHeader'>
                        How does it work?
                    </h3>
                    <p className='generalParagraph'>
                        <p>
                                A REIT raises money from many individual inveastors, and then use the money to manage a portfolio of real estate investments. This could mean 
                            buying properties to lease to tenants or invest in financial assets like mortgages. The REIT collects rent from its tenants or receives payments on 
                            the mortgages it holds, and it generally distributes its earnings to shareholders. 
                        </p>
                        <p>
                                To qualify as being a REIT, the company needs to foll rules and meet requirements. A REIT must generally invest at least 75% of its assets in real 
                            estate and pay out at least 90% of its taxable income annually to shareholders as dividends. In exchange for following those rules, REITs get special 
                            tax treatment that may allow them to pay little or no corporate income tax (though REIT investors still generally owe taxes on any dividends and 
                            realized gains).
                        </p>
                    </p>
                </div>
                <div className='generalColumn'>
                    <h4 className='generalHeader'>
                        How to invest in a REIT
                    </h4>
                    <p className='generalParagraph'>
                        <p>
                                Investors can buy publicly traded REITs the same way they buy stocks. In a brokerage account, an investor can place an order for an individual 
                            publicly traded REIT using its ticker symbol.
                        </p>
                        <p>
                                Another option is to buy one or more mutual funds or ETFs that hold REITs. Mutual funds and ETFs are professionally managed portfolios that combine 
                            your money with that of other investors and invest it in a basket of securities. They can offer a way to invest in a diversified, professionally managed 
                            portfolio of REITs without having to research a lot of individual REITs. 
                        </p>
                    </p>
                </div>
                <div className='generalColumn'>
                    <h5 className='generalHeader'>
                       Different types of REITs
                    </h5>
                    <ul className='generalParagraph'>
                            <li className="generalBulletPoint">
                                <b>Equity REITs:</b> Equity REITs own and manage real estate that generates income. Revenues are generated primarily through rent, not by reselling 
                                properties.
                            </li>
                            <li className="generalBulletPoint">
                                <b>Mortage Reits:</b> Mortgage REITs lend money to real estate owners and operators directly through mortgages and loans or indirectly through 
                                acquiring mortgage-backed securities. Their earnings are generated primarily by the net interest margin—the spread between the interest they earn 
                                on mortgage loans and the cost of funding these loans. This model makes them sensitive to interest rate increases—though equity REITs are also 
                                greatly affected by rate change.
                            </li>
                            <li className="generalBulletPoint">
                                <b>Hybrid REIT:</b> These REITs mix strategies from both equity and mortgage REITs. After the 2007–2008 financial crisis, these trusts, already on 
                                the wane, largely disappeared as regulations changed and REITs became more, not less, specialized.
                            </li>
                    </ul>
                </div>
                <div className='generalColumn'>
                    <h6 className='generalHeader'>
                        What makes and REIT an REIT?
                    </h6>
                    <p className='generalParagraph'>
                            Most REITs lease space, collect rent, and distribute this income as dividends to shareholders. A small percentage of REITs, called mortgage REITs, 
                        earn money from financing real estate, not owning it. To qualify as a REIT, a company must meet several requirements set by the Internal Revenue Service (IRS).
                    </p>
                    <ul className="generalParagraph">
                        <li className="generalBulletPoint">
                            Invest at least 75% of total assets in real estate, cash, or U.S. Treasurys
                        </li>
                        <li className="generalBulletPoint">
                            Derive at least 75% of gross income from rent, interest on mortgages that finance real estate, or real estate sales
                        </li>
                        <li className="generalBulletPoint">
                            Pay a minimum of 90% of their taxable income to their shareholders through dividends
                        </li>
                        <li className="generalBulletPoint">
                            Be a taxable corporation
                        </li>
                        <li className="generalBulletPoint">
                            Be managed by a board of directors or trustees
                        </li>
                        <li className="generalBulletPoint">
                            Have a minimum of 100 shareholders
                        </li>
                        <li className="generalBulletPoint">
                            Have no more thean 50% of its shares held by five or fewer individuals
                        </li>
                    </ul>
                </div>
                <div className='generalColumn'>
                    <h9 className='generalHeader'>
                        Are RIETs good investments?
                    </h9>
                    <p className='generalParagraph'>
                        <p>
                                Whether investing in these trusts is a good idea depends on your financial goals, risk tolerance, and overall stock market investing 
                            strategy. REITs offer the potential for steady income through dividends, portfolio diversification, and exposure to real estate without 
                            all the complexities and headaches of directly owning property. Historically, they offer competitive long-term returns and can hedge against 
                            inflation.
                        </p>
                        <p>
                                However, REITs also have risks, such as sensitivity to interest rate changes, economic downturns, and sector-specific challenges.
                        </p>
                    </p>
                </div>
            </div>
            <div className="section2">
                <Link href="/">
                    <button className="homeButton">Home</button>
                </Link>
            </div>
        </div>
    )
}

// https://www.investopedia.com/terms/r/reit.asp