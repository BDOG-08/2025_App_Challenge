'use client';
import Link from 'next/link';
import "./stocksPage.css";

export default function StocksPage() {
    return (
        <div>
            <div className='section1'>
                <div className='header1'>
                    <h1>Stocks</h1>
                </div>

                <div className='generalColumn'>
                    <h2 className='generalHeader'>What Are Stocks?</h2>
                    <p className='generalParagraph'>
                        Stocks represent ownership shares in a company. When you buy a stock, you essentially own a small portion of that company. Stocks are traded on stock markets, which provide a place for buying and selling these shares. Companies issue stocks to raise funds for growth, and investors purchase them hoping to earn returns.
                    </p>
                </div>

                <div className='generalColumn'>
                    <h3 className='generalHeader'>What Are Stock Exchanges?</h3>
                    <p className='generalParagraph'>
                        Stock exchanges are platforms where securities are bought and sold. Major examples include the New York Stock Exchange (NYSE), London Stock Exchange, and Tokyo Stock Exchange. NASDAQ operates electronically without a central trading floor. Exchanges track listed companies, display prices, and handle transactions between buyers and sellers. Stock prices fluctuate throughout the trading day, and investors profit by selling shares at higher prices than they purchased them.
                    </p>
                </div>

                <div className='generalColumn'>
                    <h4 className='generalHeader'>Factors Affecting Stock Prices</h4>
                    <p className='generalParagraph'>
                        Stock prices can be influenced by company performance, economic conditions, government regulations, geopolitical events, and investor sentiment. Widespread selling due to fear can drive prices down, potentially causing a market crash, where prices drop dramatically and few buyers remain.
                    </p>
                </div>

                <div className='generalColumn'>
                    <h5 className='generalHeader'>The Great Depression</h5>
                    <p className='generalParagraph'>
                        The 1929 stock market crash in the United States led to widespread economic hardship. Panic selling caused massive losses, closing banks and businesses, reducing wages, and triggering a decade-long period of financial difficulty.
                    </p>
                </div>

                <div className='generalColumn'>
                    <h6 className='generalHeader'>Types of Stocks</h6>
                    <ul className='generalParagraph'>
                        <li><b>Publicly Traded Stock:</b> Listed on exchanges like NYSE or NASDAQ, accessible to everyday investors, and regulated by the SEC.</li>
                        <li><b>Private Stock:</b> Ownership in private companies, not freely traded, often received through compensation or approved sales.</li>
                        <li><b>Common Stock:</b> Grants voting rights and ownership in a company; last to receive assets if the company liquidates.</li>
                        <li><b>Preferred Stock:</b> Offers fixed dividends and priority over common stock for payouts; may be convertible to common shares.</li>
                        <li><b>Growth Stock:</b> Companies expected to grow earnings faster than average; typically reinvest profits and may not pay dividends.</li>
                        <li><b>Value Stock:</b> Shares of established companies considered undervalued relative to earnings; may pay dividends.</li>
                        <li><b>Income Stock:</b> Focused on dividend payments as primary profit; appreciation is secondary.</li>
                    </ul>
                </div>

                <div className='generalColumn'>
                    <h8 className='generalHeader'>Earnings from Stocks</h8>
                    <ul className='generalParagraph'>
                        <li><b>Capital Appreciation:</b> Selling shares for more than the purchase price when the company performs well.</li>
                        <li><b>Dividends:</b> Periodic payments from company profits, expressed as a percentage yield of the stock price.</li>
                    </ul>
                </div>

                <div className='generalColumn'>
                    <h9 className='generalHeader'>Shareholder Rights</h9>
                    <p className='generalParagraph'>
                        Shareholders own a portion of the company and may receive dividends and vote on company matters. In bankruptcy, bondholders and other creditors are prioritized before common shareholders. Some classes of stock may not provide voting rights, but ownership generally includes entitlement to profits and potential stock price appreciation.
                    </p>
                </div>
            </div>

            {/* --- Citations Section --- */}
            <div className="citations">
                <h3 className='generalHeader'>Sources</h3>
                <ul className='generalParagraph'>
                    <li>
                        Investopedia. (2024). <i>Stock Definition, How Stocks Work, and Investing Basics.</i> Retrieved from 
                        <a href="https://www.investopedia.com/terms/s/stock.asp" target="_blank" rel="noopener noreferrer"> https://www.investopedia.com/terms/s/stock.asp</a>
                    </li>
                    <li>
                        Britannica Kids. (2024). <i>Stock Exchange.</i> Retrieved from 
                        <a href="https://kids.britannica.com/kids/article/stock-exchange/353812" target="_blank" rel="noopener noreferrer"> https://kids.britannica.com/kids/article/stock-exchange/353812</a>
                    </li>
                </ul>
            </div>

            <div className='section2'>
                <Link href="/">
                    <button className="HomeButton">Home</button>
                </Link>
            </div>
        </div>
    );
}