'use client';
import Link from 'next/link'
import "./cryptoCurrencyPage.css";

export default function cryptoCurrencyPage(){
    return(
        <div>
            <div className='section1'>
                <div className='header1'>
                    <h1>
                        Crypto Currencies
                    </h1>
                </div>
                <div className='generalColumn'>
                    <h2 className='generalHeader'>
                        What is a crypto currency?
                    </h2>
                    <p className='generalParagraph'>
                            Cryptocurrencies are digital tokens, they are not physical coins or cash. They are a 
                        type of digital money that allows people to make payments directly to each other through 
                        an online system. They were set up to allow person-to-person transactions without the need 
                        for banks. Cryptocurrencies have no value set by law. They are simply worth what people are 
                        willing to pay for them in the market.
                    </p>
                </div>
                <div className='generalColumn'>
                    <h3 className='generalHeader'>
                        How many crypto currencies are there?
                    </h3>
                    <p className='generalParagraph'>
                            Just as there are many different traditional currencies in the world (Australian dollar, Euro, Japanese yen), 
                        there are many different cryptocurrencies. In fact, there are more than 1300 with the most 
                        well-known of these is Bitcoin. A new cryptocurrency can be created at any time. Bitcoin is 
                        the world’s largest cryptocurrency followed by Ethereum, Ripple, Bitcoin Cash, Cardano, and 
                        Litecoin. Activity in cryptocurrency markets has increased a lot and prices of cryptocurrencies 
                        have risen quickly. The fascination with these currencies appears to have been more about making 
                        money (buying them to make a profit) rather than their use as a new and unique system for making 
                        payments.
                    </p>
                </div>
                <div className='generalColumn'>
                    <h4 className='generalHeader'>
                        Who created Bitcoin?
                    </h4>
                    <p className='generalParagraph'>
                            No one knows. In October 2008, a group of geniuses named Satoshi Nakamoto officially unveiled 
                        a report detailing the workings of a new form of currency: Bitcoin. Nakamoto, who was once 
                        rumoured to be Australian academic* Craig Wright, claimed to be a 37-year-old man living in 
                        Japan, but some say he’s unlikely to be Japanese given his perfect English.
                    </p>
                </div>
                <div className='generalColumn'>
                    <h5 className='generalHeader'>
                        How do crypto currencies work?
                    </h5>
                    <p className='generalParagraph'>
                            Cryptocurrencies operate on a decentralized system, meaning they are not controlled or 
                        regulated by any central authority, such as a government or bank. Instead, transactions are verified 
                        and recorded by a network of computers, known as nodes, all over the world. The technology underlying 
                        cryptocurrencies is called blockchain. Blockchain is a decentralized ledger that records all transactions 
                        made with a particular cryptocurrency. This transparent and tamper-proof system ensures the security and 
                        integrity of transactions, making cryptocurrencies an attractive alternative to traditional financial systems.
                    </p>
                </div>
                <div className='generalColumn'>
                    <h6 className='generalHeader'>
                        Why do people buy crypto currencies?
                    </h6>
                    <p className='generalParagraph'>
                            The value of cryptocurrencies is determined by the forces of supply and demand. As more people buy and use 
                        a particular cryptocurrency, its value increases. Conversely, if people start selling the cryptocurrency, its 
                        value may decrease. This dynamic nature of cryptocurrencies makes them subject to market fluctuations and volatility.
                    </p>
                </div>
                <div className='generalColumn'>
                    <h8 className='generalHeader'>
                        How do you access your cryptocurrencies?
                    </h8>
                    <p className='generalParagraph'>
                            To store and manage cryptocurrencies, users need a digital wallet. A digital wallet is a software application that 
                        allows users to securely store their cryptocurrencies and conduct transactions. It is essential to protect digital wallets 
                        with strong passwords and other security measures to prevent unauthorized access. The security of cryptocurrency transactions 
                        is ensured through the use of algorithms. These algorithms verify and encrypt transactions, making them secure and nearly 
                        impossible to counterfeit. The use of algorithms also adds an element of privacy to cryptocurrency transactions while 
                        maintaining transparency.
                    </p>
                </div>
                <div className='generalColumn'>
                    <h9 className='generalHeader'>
                        The pros and cons of cryptocurrencies
                    </h9>
                    <p className='generalParagraph'>
                            Cryptocurrencies have gained significant appeal due to their unique features and advantages. One of the key attractions 
                        is the ability to facilitate quick and simple transactions. Unlike traditional banking systems, which often involve lengthy 
                        processes and intermediaries, cryptocurrencies allow for seamless peer-to-peer transfers. This speed and efficiency have even 
                        prompted institutions like the Bank of England to explore the creation of their own digital currencies. Another appealing 
                        aspect of cryptocurrencies is their potential to separate money from government control. In a decentralized system, individuals 
                        have the freedom to transact without the need for intermediaries or third-party oversight. This offers a level of security and 
                        anonymity for financial transactions, which some people find empowering and liberating. However, it is important to acknowledge 
                        the risks associated with cryptocurrencies. The crypto sector is largely unregulated, meaning that it operates in a relatively 
                        uncharted and unpredictable territory. This lack of oversight can expose investors and users to potential scams and fraud. 
                        Moreover, cryptocurrencies are known for their high volatility. The value of each cryptocurrency is primarily driven by people’s 
                        willingness to buy and use it, rather than being backed by tangible assets. This inherent volatility can lead to significant price 
                        fluctuations, resulting in potential financial losses for investors.
                    </p>
                </div>
            </div>
            
            <div className='section2'>
                <div>
                    <Link href="/">
                        <button className="HomeButton">Home</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

// https://www.kidsnews.com.au/money/what-is-cryptocurrency-and-how-does-it-work-in-the-digital-world/news-story/7f8105dbed5eb13916b379fab8b6c437
// https://www.littleexplainers.com/how-to-explain-cryptocurrency-to-a-child/