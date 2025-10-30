'use client';
import Link from 'next/link';
import "./cryptoCurrencyPage.css";

export default function CryptoCurrencyPage() {
    return (
        <div>
            <div className='section1'>
                <div className='header1'>
                    <h1>Cryptocurrencies</h1>
                </div>

                <div className='generalColumn'>
                    <h2 className='generalHeader'>What Is a Cryptocurrency?</h2>
                    <p className='generalParagraph'>
                        Cryptocurrencies are digital assets that exist only electronically. They allow people to transfer value directly to one another without using banks. Their worth is determined by market demand rather than legal regulations.
                    </p>
                </div>

                <div className='generalColumn'>
                    <h3 className='generalHeader'>How Many Cryptocurrencies Exist?</h3>
                    <p className='generalParagraph'>
                        Similar to the variety of global currencies like the US dollar or Euro, there are numerous cryptocurrencies—over 1300 exist today. Bitcoin is the most recognized, followed by Ethereum, Ripple, Bitcoin Cash, Cardano, and Litecoin. Market interest in cryptocurrencies has grown mainly due to investment speculation rather than actual payment use.
                    </p>
                </div>

                <div className='generalColumn'>
                    <h4 className='generalHeader'>Who Created Bitcoin?</h4>
                    <p className='generalParagraph'>
                        Bitcoin was introduced in 2008 by the pseudonymous Satoshi Nakamoto. While Nakamoto’s identity remains unknown, initial reports claimed he was a 37-year-old living in Japan, though some dispute this based on language clues.
                    </p>
                </div>

                <div className='generalColumn'>
                    <h5 className='generalHeader'>How Do Cryptocurrencies Work?</h5>
                    <p className='generalParagraph'>
                        Cryptocurrencies rely on decentralized systems, meaning no single authority, like a government or bank, controls them. Transactions are verified by a network of computers called nodes and recorded on a blockchain, a secure and transparent ledger.
                    </p>
                </div>

                <div className='generalColumn'>
                    <h6 className='generalHeader'>Why Do People Buy Cryptocurrencies?</h6>
                    <p className='generalParagraph'>
                        Cryptocurrency prices are influenced by supply and demand. Increased buying and usage drive values up, while selling pressures lower them. This causes high volatility and frequent market fluctuations.
                    </p>
                </div>

                <div className='generalColumn'>
                    <h8 className='generalHeader'>How Do You Access Cryptocurrencies?</h8>
                    <p className='generalParagraph'>
                        To use cryptocurrencies, people store them in digital wallets—secure software applications for managing assets and transactions. Strong passwords and security measures are crucial. Cryptographic algorithms ensure transaction integrity and privacy while maintaining transparency.
                    </p>
                </div>

                <div className='generalColumn'>
                    <h9 className='generalHeader'>Pros and Cons of Cryptocurrencies</h9>
                    <p className='generalParagraph'>
                        Cryptocurrencies allow fast peer-to-peer transactions and operate independently of governments, providing security and anonymity. However, they are largely unregulated, which can expose users to scams, fraud, and high price volatility, since values are determined by market interest rather than tangible assets.
                    </p>
                </div>
            </div>

            {/* --- Citations Section --- */}
            <div className="citations">
                <h3 className='generalHeader'>Sources</h3>
                <ul className='generalParagraph'>
                    <li>
                        Kids News. (2024). <i>What Is Cryptocurrency and How Does It Work in the Digital World.</i> Retrieved from 
                        <a href="https://www.kidsnews.com.au/money/what-is-cryptocurrency-and-how-does-it-work-in-the-digital-world/news-story/7f8105dbed5eb13916b379fab8b6c437" target="_blank" rel="noopener noreferrer"> https://www.kidsnews.com.au/money/what-is-cryptocurrency-and-how-does-it-work-in-the-digital-world/news-story/7f8105dbed5eb13916b379fab8b6c437</a>
                    </li>
                    <li>
                        Little Explainers. (2024). <i>How to Explain Cryptocurrency to a Child.</i> Retrieved from 
                        <a href="https://www.littleexplainers.com/how-to-explain-cryptocurrency-to-a-child/" target="_blank" rel="noopener noreferrer"> https://www.littleexplainers.com/how-to-explain-cryptocurrency-to-a-child/</a>
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