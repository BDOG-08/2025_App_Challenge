'use client'
import Link from 'next/link'
import "./etfPage.css"

export default function EtfPage(){
    return(
        <div>
            <div>
                <h1 className='header1'>
                    All About ETFs
                </h1>
                <div className='section1'>
                    <div className='generalColumn'>
                        <h2 className='generalHeader'>
                            What Is an ETF?
                        </h2>
                        <p className='generalParagraph'>
                            An exchange-traded fund (ETF) is an investment fund that combines various assets, such as stocks or bonds, and trades on public exchanges like a regular stock. ETFs can follow an index, sector, or asset class. The first U.S. ETF, SPDR S&P 500 (SPY), was launched in 1993 and tracks the S&P 500 Index.
                        </p>
                    </div>

                    <div className='generalColumn'>
                        <h3 className='generalHeader'>
                            How ETFs Work
                        </h3>
                        <p className='generalParagraph'>
                            ETFs are regulated by the U.S. Securities and Exchange Commission (SEC) and are usually structured as open-ended funds, meaning there’s no limit on the number of investors. A fund like Vanguard’s Consumer Staples ETF (VDC) holds shares of companies such as Procter & Gamble, Costco, and Coca-Cola. ETF prices change throughout the trading day, unlike mutual funds that trade only once daily.
                        </p>
                    </div>

                    <div className='generalColumn'>
                        <h4 className='generalHeader'>
                            Types of ETFs
                        </h4>
                        <ul className='generalParagraph'>
                            <li><b>Passive ETFs:</b> Track a market index such as the S&P 500.</li>
                            <li><b>Active ETFs:</b> Managed by professionals who select investments directly.</li>
                            <li><b>Bond ETFs:</b> Focus on fixed-income securities like government or corporate bonds.</li>
                            <li><b>Sector ETFs:</b> Track a specific industry, such as energy or technology.</li>
                            <li><b>Commodity ETFs:</b> Follow the price of goods like oil or gold.</li>
                            <li><b>Currency ETFs:</b> Track foreign exchange markets.</li>
                            <li><b>Bitcoin & Ethereum ETFs:</b> Provide exposure to cryptocurrency price movements.</li>
                            <li><b>Inverse & Leveraged ETFs:</b> Use derivatives to gain returns from falling markets or amplify profits.</li>
                        </ul>
                    </div>

                    <div className='generalColumn'>
                        <h5 className='generalHeader'>
                            Investing in ETFs
                        </h5>
                        <p className='generalParagraph'>
                            ETFs can be purchased through online brokers or traditional financial firms. Many platforms now offer commission-free trading. Investors can also use robo-advisors, such as Betterment or Wealthfront, to automatically manage ETF investments. It’s common to use ETF screeners to compare funds by cost, performance, and sector.
                        </p>
                    </div>

                    <div className='generalColumn'>
                        <h6 className='generalHeader'>
                            Dividends and Taxes
                        </h6>
                        <p className='generalParagraph'>
                            ETFs can pay out dividends or interest from the underlying assets they hold. They’re generally more tax-efficient than mutual funds because they trade directly on exchanges, avoiding frequent taxable redemptions.
                        </p>
                    </div>

                    <div className='generalColumn'>
                        <h7 className='generalHeader'>
                            Creation and Redemption
                        </h7>
                        <p className='generalParagraph'>
                            ETF shares are created and redeemed through large institutional investors called authorized participants (APs). APs exchange baskets of securities for ETF shares or vice versa, keeping the ETF’s price close to its actual net asset value (NAV).
                        </p>
                    </div>

                    <div className='generalColumn'>
                        <h8 className='generalHeader'>
                            The First ETF
                        </h8>
                        <p className='generalParagraph'>
                            The SPDR S&P 500 ETF (SPY), introduced in 1993 by State Street Global Advisors, is recognized as the first U.S. ETF. Earlier forms of ETFs existed in Canada in 1990, such as the Toronto 35 Index Participation Units.
                        </p>
                    </div>
                </div>

                {/* --- Citation section --- */}
                <div className='citations'>
                    <h3 className='generalHeader'>Sources</h3>
                    <ul className='generalParagraph'>
                        <li>
                            Investopedia. (2024). <i>Exchange-Traded Fund (ETF): Definition, Types, and How to Invest.</i> Retrieved from 
                            <a href="https://www.investopedia.com/terms/e/etf.asp" target="_blank" rel="noopener noreferrer"> https://www.investopedia.com/terms/e/etf.asp</a>
                        </li>
                    </ul>
                </div>

                <Link href="/">
                    <button>Home</button>
                </Link>
            </div>
        </div>
    )
}