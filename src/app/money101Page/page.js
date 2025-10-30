'use client';
import Link from 'next/link';
import "./money101Page.css";

export default function Money101Page() {
    return (
        <div>
            <div className="section1">
                <div className='header1'>
                    <h1>Money 101</h1>
                </div>

                <div className='generalColumn'>
                    <h2 className='generalHeader'>What Is Money?</h2>
                    <p className='generalParagraph'>
                        Money is any item or medium of exchange that represents perceived value. It allows people to pay for goods and services or repay debts. Economies rely on money to facilitate transactions and support financial growth.
                    </p>
                </div>

                <div className='generalColumn'>
                    <h3 className='generalHeader'>Medium of Exchange</h3>
                    <p className='generalParagraph'>
                        Before money, people bartered goods directly. Bartering was inefficient due to transferability and divisibility issues. Commodity money, such as beaver pelts, corn, or gold, solved this problem by providing widely accepted, durable, and portable items of value. Gold, for example, had worth because people valued it, serving as a physical token of wealth.
                    </p>
                </div>

                <div className='generalColumn'>
                    <h4 className='generalHeader'>Impressions Create Value</h4>
                    <p className='generalParagraph'>
                        Fiat money does not require backing by a physical commodity. Its value depends on supply, demand, and people’s trust. Since the U.S. left the gold standard in 1971, the dollar's value is supported by the economy's strength. Money represents the interaction between tangible goods and public perception of value.
                    </p>
                </div>

                <div className='generalColumn'>
                    <h5 className='generalHeader'>How Is Money Measured?</h5>
                    <p className='generalParagraph'>
                        Economists classify money into categories to measure supply:
                        <li className='generalBulletPoint'><u>M1</u> – Physical coins and bills, checking accounts, and travelers’ checks.</li>
                        <li className='generalBulletPoint'><u>M2</u> – M1 plus time deposits, retirement accounts, and non-institutional money market funds.</li>
                        <li className='generalBulletPoint'><u>M3</u> – M2 plus large deposits, institutional money market funds, and other liquid assets.</li>
                    </p>
                </div>

                <div className='generalColumn'>
                    <h6 className='generalHeader'>How Is Money Created?</h6>
                    <p className='generalParagraph'>
                        Central banks control money supply. They can increase it by printing currency, buying government securities, or lowering interest rates to encourage borrowing. Conversely, selling securities or raising rates reduces money in circulation. Faith in currency ensures its value; oversupply decreases it.
                    </p>
                </div>

                <div className='generalColumn'>
                    <h8 className='generalHeader'>What Does Money Symbolize?</h8>
                    <p className='generalParagraph'>
                        Money symbolizes perceived value, enabling the exchange of goods and services. On a personal level, it may represent wealth, status, or security.
                    </p>
                </div>

                <div className='generalColumn'>
                    <h9 className='generalHeader'>What Is Liquidity?</h9>
                    <p className='generalParagraph'>
                        Liquidity measures how easily an asset can be converted into cash. Cash is most liquid, followed by short-term securities. Less liquid assets include houses, cars, and jewelry, which may lose value during conversion.
                    </p>
                </div>

                <div className='generalColumn'>
                    <h10 className="generalHeader">Money vs Currency</h10>
                    <p className='generalParagraph'>
                        Currency is one form of money, typically issued by governments. Money more broadly represents a system of value for exchanging goods and services.
                    </p>
                </div>
            </div>

            {/* --- Citations Section --- */}
            <div className="citations">
                <h3 className='generalHeader'>Sources</h3>
                <ul className='generalParagraph'>
                    <li>
                        Investopedia. (2024). <i>What Is Money?</i> Retrieved from 
                        <a href="https://www.investopedia.com/insights/what-is-money/" target="_blank" rel="noopener noreferrer">
                            https://www.investopedia.com/insights/what-is-money/
                        </a>
                    </li>
                </ul>
            </div>

            <div className="section2">
                <Link href="/">
                    <button className="HomeButton">Home</button>
                </Link>
            </div>
        </div>
    )
}