'use client';
import Link from "next/link";
import "./bondsPage.css";

export default function BondsPage() {
    return (
        <div>
            <div className="section1">
                <div className='header1'>
                    <h1>Bonds</h1>
                </div>

                <div className='generalColumn'>
                    <h2 className='generalHeader'>What Is a Bond?</h2>
                    <p className='generalParagraph'>
                        A bond is a type of fixed-income investment available on most brokerage platforms where an investor loans money to a company or government for a set time and at a specific interest rate. In exchange, the issuer pays back the initial amount (the principal) plus interest over time.
                    </p>
                    <p className='generalParagraph'>
                        Governments, corporations, and municipalities issue bonds to raise money for projects or operations. When you buy a bond, you become a creditor of the issuer. Each bond lists the maturity date, which is when the issuer must repay the loan amount, as well as details about how and when interest is paid.
                    </p>
                </div>

                <div className='generalColumn'>
                    <h3 className='generalHeader'>How Do Bonds Work?</h3>
                    <p className='generalParagraph'>
                        Bonds represent loans made by investors to issuers such as corporations or governments. These funds are often used for building infrastructure, expanding businesses, or funding new ventures. Bonds belong to the “fixed-income” category of investments, alongside equities and cash equivalents.
                    </p>
                    <p className='generalParagraph'>
                        When a bond is issued, it specifies its maturity date, interest rate (called the coupon rate), and repayment terms. Most bonds are initially sold at their “par value” or face value, which is what investors receive when the bond matures. The market price of a bond depends on factors like credit quality, remaining time to maturity, and current interest rates.
                    </p>
                </div>

                <div className="generalColumn">
                    <h4 className="generalHeader">Key Features of a Bond</h4>
                    <ul className="generalParagraph">
                        <li><b>Face Value (Par Value):</b> The bond’s worth at maturity and the amount on which interest payments are based.</li>
                        <li><b>Coupon Rate:</b> The fixed or variable interest rate that determines how much interest is paid.</li>
                        <li><b>Coupon Dates:</b> The scheduled dates when interest payments are made to investors.</li>
                    </ul>
                </div>

                <div className='generalColumn'>
                    <h4 className='generalHeader'>Types of Bonds</h4>
                    <p className='generalParagraph'>
                        <b>Corporate Bonds:</b> Issued by companies to fund operations or projects. Returns vary by the company’s credit rating. Higher-risk “junk bonds” offer higher potential returns but carry more default risk. Interest earned is usually taxable at federal and state levels.
                    </p>
                    <p className='generalParagraph'>
                        <b>Sovereign Bonds:</b> Issued by national governments, these typically have strong credit ratings and lower yields. In the U.S., these are known as Treasury securities, which are exempt from state and local taxes but subject to federal tax.
                    </p>
                    <p className='generalParagraph'>
                        <b>Municipal Bonds:</b> Issued by state or local governments to finance public projects. Income from many municipal bonds is exempt from federal taxes, and sometimes from state and local taxes too, making them attractive to high-income investors.
                    </p>
                </div>

                <div className='generalColumn'>
                    <h5 className='generalHeader'>Bond Variations</h5>
                    <p className='generalParagraph'>
                        Bonds come in many forms depending on how they pay interest or what special features they include:
                    </p>
                    <ul className="generalParagraph">
                        <li><b>Zero-Coupon Bonds:</b> Sold at a discount and pay no periodic interest. Investors receive the full face value at maturity (e.g., U.S. Treasury bills).</li>
                        <li><b>Convertible Bonds:</b> Allow bondholders to convert their bonds into company stock under certain conditions.</li>
                        <li><b>Callable Bonds:</b> Let issuers repay the bond early, usually when interest rates fall, posing more risk to investors.</li>
                        <li><b>Puttable Bonds:</b> Allow investors to sell the bond back to the issuer before maturity, providing more flexibility and lower risk.</li>
                    </ul>
                </div>

                <div className='generalColumn'>
                    <h6 className='generalHeader'>Bond Prices and Interest Rates</h6>
                    <p className='generalParagraph'>
                        A bond’s price moves daily based on market supply and demand. If held until maturity, investors receive their principal plus interest. However, if sold early, the bond’s price fluctuates depending on current interest rates. When rates rise, bond prices drop—and when rates fall, prices increase.
                    </p>
                    <p className='generalParagraph'>
                        For example, if a $1,000 bond pays a 10% annual coupon ($100 per year), it’s fairly valued when market rates are 10%. If market rates fall to 5%, that same bond becomes more valuable, since it pays twice as much as new issues—so its market price increases. Conversely, if rates climb to 15%, the bond’s price drops until its yield aligns with market conditions.
                    </p>
                </div>

                <div className='generalColumn'>
                    <h7 className='generalHeader'>Yield to Maturity (YTM)</h7>
                    <p className='generalParagraph'>
                        The yield to maturity (YTM) measures the total expected return if the bond is held until it matures, assuming all payments occur on schedule. It represents the bond’s annualized rate of return, similar to an internal rate of return (IRR).
                    </p>
                    <img 
                        src="https://www.investopedia.com/thmb/rJoQ4Rt5iNFFu9Gm_PZRFdP5S3k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/YTM-ba4cbe49e854427ca467a11ef9d2dd63.jpg" 
                        alt="Yield to Maturity formula"
                    />
                    <p className="credits">Credit: Investopedia</p>
                    <p className='generalParagraph'>
                        Investors use bond duration to measure how sensitive a bond’s price is to interest rate changes. Longer-duration bonds and bonds with lower coupons are more affected by interest rate shifts.
                    </p>
                </div>

                <div className='generalColumn'>
                    <h8 className='generalHeader'>Bond Ratings</h8>
                    <p className='generalParagraph'>
                        Bond ratings are assigned by agencies like Standard & Poor’s, Moody’s, and Fitch to indicate credit risk. “Investment-grade” bonds, such as those from stable governments or utilities, carry lower risk and pay less interest. “High-yield” or “junk” bonds offer higher potential returns but come with greater risk of default.
                    </p>
                </div>
            </div>

            {/* --- Citations Section --- */}
            <div className="citations">
                <h3 className='generalHeader'>Sources</h3>
                <ul className='generalParagraph'>
                    <li>
                        Investopedia. (2024). <i>Bond Definition, How They Work, and Types.</i> Retrieved from 
                        <a href="https://www.investopedia.com/terms/b/bond.asp" target="_blank" rel="noopener noreferrer"> https://www.investopedia.com/terms/b/bond.asp</a>
                    </li>
                    <li>
                        Investopedia. (2024). <i>Bond Market Basics: Types, Features, and Pricing.</i> Retrieved from 
                        <a href="https://www.investopedia.com/articles/bonds/08/bond-market-basics.asp" target="_blank" rel="noopener noreferrer"> https://www.investopedia.com/articles/bonds/08/bond-market-basics.asp</a>
                    </li>
                </ul>
            </div>

            <div className="section2">
                <Link href="/">
                    <button className="HomeButton">Home</button>
                </Link>
            </div>
        </div>
    );
}