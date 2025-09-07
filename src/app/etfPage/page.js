'use client'
import Link from 'next/link'
import "./etfPage.css"

export default function EtfPage(){
    return(
        <div>
            <div>
                        <h1 className='header1'>
                            All about ETFs
                        </h1>
                <div className='section1'>
                    <div className='generalColumn'>    
                        <h2 className='generalHeader'>
                            What is a ETF
                        </h2>
                            <p className='generalParagraph'>  
                                    An ETF is short for exchange-traded fund is an investment fund that 
                                holds multiple underlying assets and can be bought and sold on an exchange, much like an individual stock.
                                ETFs can track anything from the price of a commodity to a series of individual stocks. The first ETF in the 
                                U.S. was the SPDR S&P 500 ETF (SPY), which tracks the S&P 500 Index.
                            </p>
                    </div>     
                    <div>    
                        <div className='generalColumn'>
                            <h3 className='generalHeader'>
                                How ETFs work
                            </h3>
                            <p className='generalParagraph'>
                                    An ETF must be registered with the Securities and Exchange Commission (SEC). In the United States, most 
                                ETFs are set up as open-ended funds and are subject to the Investment Company Act of 1940, except where 
                                subsequent rules have modified their regulatory requirements. Open-ended funds do not limit the number 
                                of investors involved in the product. Vanguard's Consumer Staples ETF (VDC) tracks the MSCI US Investable 
                                Market Consumer Staples 25/50 Index and has a minimum investment of $1.00. The fund holds shares of all 104 
                                companies on the index, some familiar to most because they produce or sell consumer items. A few of the companies 
                                held by VDC are Proctor & Gamble, Costco, Coca-Cola, Walmart, and PepsiCo. There is no transfer of ownership because 
                                investors buy a share of the fund, which owns the shares of the underlying companies. Unlike mutual funds, ETF share 
                                prices are determined throughout the day. A mutual fund trades only once a day after the markets close.
                            </p>
                        </div>
                        <div className='generalColumn'>
                            <h4 className='generalHeader'>
                                Types of ETFs
                            </h4>
                        
                            <ul className='generalParagraph'>
                                <li>
                                Passive ETFs: Passive ETFs aim to replicate the performance of a broader index—either a diversified index such as the S&P 
                            500 or a more targeted sector or trend.
                                </li>
                                <li>
                                Actively managed ETFs: These ETFs don't target an index. Instead, portfolio managers make decisions about which securities 
                            to buy and sell. Actively managed ETFs have benefits over passive ETFs but charge higher fees.
                                </li>
                                <li>
                                Bond ETFs: Used to provide regular income to investors. Distribution depends on the performance of underlying bonds which 
                            may include government, corporate, and state and local bonds, usually called municipal bonds. Unlike their underlying instruments, 
                            bond ETFs do not have a maturity date.
                                </li>
                                <li>
                                Industry or sector ETFs: A basket of stocks that track a single industry or sector like automotive or energy. The aim is to provide 
                            diversified exposure to a single industry, one that includes high performers and new entrants with growth potential. BlackRock's iShares 
                            U.S. Technology ETF (IYW), for example, tracks the Russell 1000 Technology RIC 22.5/45 Capped Index.
                                </li>
                                <li>
                                Commodity ETFs: Invest in commodities like crude oil or gold. Commodity ETFs can diversify a portfolio. Holding shares in a commodity 
                            ETF is cheaper than physical possession of the commodity.
                                </li>
                                <li>
                                Currency ETFs: Track the performance of currency pairs and can be used to speculate on the exchange rates of currencies based on 
                            political and economic developments in a country. Some use them to diversify a portfolio while importers and exporters use them to hedge 
                            against volatility in currency markets.
                                </li>
                                <li>
                                Bitcoin ETFs: The spot Bitcoin ETF was approved by the SEC in 2024. These ETFs expose investors to bitcoin's price moves in their 
                            regular brokerage accounts by purchasing and holding bitcoin as the underlying asset. Bitcoin futures ETFs, approved in 2021, use futures 
                            contracts traded on the Chicago Mercantile Exchange and track the price movements of bitcoin futures contracts.
                                </li>
                                <li>
                                Ethereum ETFs: Spot ether ETFs provide a way to invest in ether, the currency native to the Ethereum blockchain, without directly 
                            owning the cryptocurrency. In May 2024, the SEC permitted Nasdaq, the Chicago Board Options Exchange, and the NYSE to list ETFs holding ether.
                            And in July 2024, the SEC officially approved nine spot ether ETFs to begin trading on U.S. exchanges.
                                </li>
                                <li>
                                Inverse ETFs: Earn gains from stock declines without having to short stocks. An inverse ETF uses derivatives to short a stock. Inverse 
                            ETFs are exchange-traded notes (ETNs) and not true ETFs. An ETN is a bond that trades like a stock and is backed by an issuer such as a bank.
                                </li>
                                <li>
                                Leveraged ETFs: A leveraged ETF seeks to return some multiples (e.g., 2× or 3×) on the return of the underlying investments. If the S&P 
                            500 rises 1%, a 2× leveraged S&P 500 ETF will return 2% (and if the index falls by 1%, the ETF would lose 2%). These products use debt 
                            and derivatives, such as options or futures contracts, to leverage their returns.   
                                </li>
                            </ul>
                        </div>
                        <div className='generalColumn'>
                            <h5 className='generalHeader'>
                            How to invest in ETFs
                            </h5>
                            <p className='generalParagraph'>
                                    ETFs trade through online brokers and traditional broker-dealers. Many sources provide pre-screened brokers in the ETF industry. 
                                Individuals can also purchase ETFs in their retirement accounts. An alternative to standard brokers is a robo-advisor like Betterment and Wealthfront.
                                An ETF’s expense ratio is the cost to operate and manage the fund. ETFs typically have low expenses because they track an index.
                                ETFs are available on most online investing platforms, retirement account provider sites, and investing apps like Robinhood. Most of these platforms offer 
                                commission-free trading, meaning that investors don’t have to pay fees to the platform providers to buy or sell ETFs. 
                                After creating and funding a brokerage account, investors can search for ETFs and buy and sell as wanted. One of the best ways to narrow 
                                ETF options is to utilize an ETF screening tool with criteria such as trading volume, expense ratio, past performance, holdings, and commission costs.
                            </p>
                        </div>
                        <div className='generalColumn'>
                            <h6 className='generalHeader'>
                                Popular ETFs
                            </h6>
                            <p className='generalParagraph'>

                            </p>
                        </div>
                        <div className='generalColumn'>
                            <h7 className='generalHeader'>
                                Divedends and Tax
                            </h7>
                            <p className='generalParagraph'>
                                    ETF investors can also benefit from companies that pay dividends. Dividends are a portion of earnings 
                                allocated to investors. ETF shareholders are entitled to a share of earned interest or dividends and may 
                                get a residual value if the fund is liquidated. An ETF is more tax-efficient than a mutual fund because 
                                most buying and selling occur through an exchange, and the ETF sponsor doesn't need to redeem shares each 
                                time an investor wishes to sell shares of the ETF. In the case of a mutual fund, each time an investor 
                                sells their shares, they sell it back to the fund and incur a tax liability that must be paid by the 
                                shareholders of the fund.
                            </p>
                        </div>
                        <div className='generalColumn'>
                            <h8 className='generalHeader'>
                                Creation and Redemption
                            </h8>
                            <p className='generalParagraph'>

                            </p>
                        </div>
                        <div className='generalColumn'>
                            <h9 className='generalHeader'>
                                Fun facts
                            </h9>
                            <p className='generalParagraph'>

                            </p>
                        </div>
                    </div>
                </div>      
            </div>
            <Link href="/">
                <button>Home</button>
            </Link>
        </div>
    )
}

// https://www.investopedia.com/terms/e/etf.asp