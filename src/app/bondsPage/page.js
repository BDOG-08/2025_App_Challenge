'use client';
import Link from "next/link";
import "./bondsPage.css";

export default function bondsPage(){
    return(
        <div>
            <div className="section1">
                <div className='header1'>
                    <h1>
                        Bonds
                    </h1>
                </div>
                <div className='generalColumn'>
                    <h2 className='generalHeader'>
                        What is a bond?
                    </h2>
                    <p className='generalParagraph'>
                        <p>
                                A bond, which is offered by most brokerage platforms, is a fixed-income investment 
                            product where individuals lend money to a government or company at a specified interest 
                            rate for a predetermined period. The entity repays individuals with interest in addition 
                            to the original face value of the bond.
                        </p>
                        <p>
                                Bonds are used by companies, municipalities, states, and sovereign governments to finance 
                            projects and operations. Owners of bonds are debtholders, or creditors, of the issuer. Bond 
                            details include the end date when the principal of the loan is due to be paid to the bond owner 
                            and usually include the terms for variable or fixed interest payments made by the borrower.
                        </p>    
                    </p>
                </div>
                <div className='generalColumn'>
                    <h3 className='generalHeader'>
                        How do bonds work?
                    </h3>
                    <p className='generalParagraph'>
                        <p>
                                Bonds are debt instruments and represent loans made to the issuer. Bonds allow individual 
                            investors to assume the role of the lender. Governments and corporations commonly use bonds to 
                            borrow money to fund roads, schools, dams, or other infrastructure projects. Corporations often 
                            borrow to grow their business, buy property and equipment, undertake profitable projects, for 
                            research and development, or hire employees.
                        </p>
                        <p>
                                Bonds are fixed-income securities and are one of the main asset classes for individual investors, 
                            along with equities and cash equivalents. The borrower issues a bond that includes the terms of the loan, 
                            interest payments that will be made, and the maturity date by which the bond principal must be repaid. 
                            The interest payment is part of the return that bondholders earn for loaning their funds to the issuer. 
                            The interest rate that determines the payment is called the coupon rate.
                        </p>
                        <p>
                                The initial price of most bonds is typically set at what is called their par value, or the face value 
                            of one bond. The actual market price of a bond depends on the credit quality of the issuer, the length of 
                            time until expiration, and the coupon rate compared to the general interest rate environment. The face value 
                            of the bond is what is paid to the lender once the bond matures.
                        </p>
                    </p>
                </div>
                <div className="generalColumn">
                    <h4 className="generalHeader">
                        What makes a bond a bond?
                    </h4>
                    <p className="generalParagraph">
                        <li>
                                <b>Face value or Par Value</b>: The value of the bond at maturity and the reference amount the bond issuer 
                            uses when calculating interest payments.
                        </li>
                        <li>
                                <b>Coupon Rate</b>: The rate of interest the bond issuer will pay on the face value of the bond, expressed 
                            as a percentage. 
                        </li>
                        <li>
                                <b>Coupon Dates</b>: The dates on which the bond issuer will make interest payments.
                        </li>
                    </p>
                </div>
                <div className='generalColumn'>
                    <h4 className='generalHeader'>
                        Types of bonds
                    </h4>
                    <p className='generalParagraph'>
                        <b>Corporate Bonds</b>
                        <p>
                                Corporate bonds refer to the debt securities that companies issue to pay their expenses and raise capital. 
                            The yield of these bonds depends on the creditworthiness of the company that issues them. The riskiest bonds are 
                            known as junk bonds, but they also offer the highest returns. Interest from corporate bonds is subject to both 
                            federal and state income taxes.
                        </p>
                        <b>Sovereign Bonds</b>
                        <p>
                                Sovereign bonds, or sovereign debt, are debt securities issued by national governments to defray their 
                            expenses. The issuing governments are very unlikely to default, so these bonds typically have a very high 
                            credit rating and a relatively low yield.
                        </p>
                        <p>
                                Bonds issued by the federal government in the United States are called Treasuries. Those issued by the 
                            United Kingdom are called gilts. Treasuries are exempt from state and local tax, although they're subject to 
                            federal income tax.
                        </p>
                        <b>Municipal Bonds</b>
                        <p>
                                Municipal bonds, or munis, are bonds issued by local governments. Contrary to what the name suggests, this 
                            can refer to state and county debt, not just municipal debt. Municipal bond income isn't always subject to most 
                            taxes, making it an attractive investment for investors in higher tax brackets.
                        </p>
                    </p>
                </div>
                <div className='generalColumn'>
                    <h5 className='generalHeader'>
                       Bond Variations
                    </h5>
                    <p className='generalParagraph'>
                        <p>
                                The bonds available for investors come in many different varieties, depending on the rate or type of interest or 
                            coupon payment, being recalled by the issuer, or because they have other attributes.
                        </p>
                        <li className="generalBulletPoint">
                                <b>Zero-Coupon Bonds (Z-bonds)</b>: Do not pay coupon payments and instead are issued at a discount to their par 
                            value that will generate a return once the bondholder is paid the full face value when the bond matures. U.S. Treasury 
                            bills are zero-coupon bonds.
                        </li>
                        <li className="generalBulletPoint">
                                <b>Convertible Bonds</b>: Debt instruments with an embedded option that allows bondholders to convert their debt into 
                            stock (equity) at some point, depending on certain conditions like the share price.
                        </li>
                        <li className="generalBulletPoint">
                                <b>Callable Bonds</b>: Have an embedded option, but it is different than what is found in a convertible bond. A callable 
                            bond can be “called” back by the company before it matures. A callable bond is riskier for the bond buyer because the bond is 
                            more likely to be called when it is rising in value.
                        </li>
                        <li className="generalBulletPoint">
                                <b>Puttable Bonds</b>: Allow the bondholders to put or sell the bond back to the company before it has matured. This is 
                            valuable for investors who are worried that a bond may fall in value or if they think interest rates will rise, and they want 
                            to get their principal back before the bond falls in value. A puttable bond usually trades at a higher value than a bond without 
                            a put option but with the same credit rating, maturity, and coupon rate because it is more valuable to the bondholders.
                        </li>
                    </p>
                </div>
                <div className='generalColumn'>
                    <h6 className='generalHeader'>
                        Bond Prices and Interest Rates
                    </h6>
                    <p className='generalParagraph'>
                        <p>
                                A bond's price changes daily, where supply and demand determine that observed price. If an investor holds a bond to maturity, 
                            they will get their principal back plus interest. However, a bondholder can sell their bonds in the open market, where the price 
                            can fluctuate. A bond’s price varies inversely with interest rates. When interest rates go up, bond prices fall to equalize the 
                            interest rate on the bond with prevailing rates, and vice versa.
                        </p>
                        <p>
                                The issuer of a fixed-rate bond promises to pay a coupon based on the face value of the bond. For a $1,000 par, 10% annual 
                            coupon bond, the issuer will pay the bondholder $100 each year. If prevailing market interest rates are also 10% when this bond 
                            is issued, an investor would be indifferent to investing in the corporate or government bonds since both would return $100. 
                            However, if interest rates drop to 5%, the investor can only receive $50 from the government bond but would still receive $100 
                            from the corporate bond.
                        </p>
                        <p>
                                Investors bid up to the price of the bond until it trades at a premium that equalizes the prevailing interest rate environment—in 
                            this case, the bond will trade at $2,000 so that the $100 coupon represents 5%. Likewise, if interest rates soared to 15%, then an 
                            investor could make $150 from the government bond and would not pay $1,000 to earn just $100. This bond would be sold until it reached 
                            a price that equalized the yields, in this case, to a price of $666.67.
                        </p>
                    </p>
                </div>
                <div className='generalColumn'>
                    <h8 className='generalHeader'>
                        The Yield-to-Maturity (YTM)
                    </h8>
                    <p className='generalParagraph'>
                        <p>
                                The <u>yield-to-maturity</u> (YTM) is the total return anticipated on a bond if the bond is held until the end of its lifetime. 
                            Yield to maturity is considered a long-term bond yield but is expressed as an annual rate.
                        </p>
                        <p>
                                YTM is the internal rate of return of an investment in a bond if the investor holds the bond until maturity and if all payments 
                            are made as scheduled. YTM evaluates the attractiveness of one bond relative to other bonds of different coupons and maturity in the 
                            market. The formula for YTM involves solving for the interest rate.
                        </p>
                        <img src="https://www.investopedia.com/thmb/rJoQ4Rt5iNFFu9Gm_PZRFdP5S3k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/YTM-ba4cbe49e854427ca467a11ef9d2dd63.jpg"/>
                        <p className="credits">Credit: investopedia</p>
                        <p>
                                Investors can measure the anticipated changes in bond prices given a change in interest rates with the duration of a bond. Duration 
                            represents the price change in a bond given a 1% change in interest rates. This practical definition is the modified duration of a bond. 
                            Bonds with long maturities, as well as bonds with low coupons, have the greatest sensitivity to interest rate changes.
                        </p>
                    </p>
                </div>
                <div className='generalColumn'>
                    <h9 className='generalHeader'>
                        How are bonds rated?
                    </h9>
                    <p className='generalParagraph'>
                            Credit ratings for a company and its bonds are generated by credit rating agencies like Standard and Poor’s, Moody’s, and Fitch 
                        Ratings. The very highest quality bonds are called “investment grade” and include debt issued by the U.S. government and very stable 
                        companies, such as utilities. Bonds that are not considered investment grade but are not in default are called “high yield” or “junk” 
                        bonds. These bonds have a higher risk of default in the future, and investors demand a higher coupon payment to compensate them for 
                        that risk.
                    </p>
                </div>
            </div>
            <div className="section2">
                <Link href="/">
                    <button className="HomeButton">Home</button>
                </Link>
            </div>
        </div>
    )
}

// https://www.investopedia.com/terms/b/bond.asp
// https://www.investopedia.com/articles/bonds/08/bond-market-basics.asp