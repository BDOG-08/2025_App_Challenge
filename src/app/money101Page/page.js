'use client'
import Link from 'next/link'
import "./money101Page.css"

export default function money101Page(){
    return(
        <div>
            <div className="section1">
                <div className='header1'>
                    <h1>
                        Money 101
                    </h1>
                </div>
                <div className='generalColumn'>
                    <h2 className='generalHeader'>
                        What is money?
                    </h2>
                    <p className='generalParagraph'>
                            Money is any item or medium of exchange that symbolizes perceived value. As a result, it is accepted by people for the 
                        payment of goods and services, as well as for the repayment of loans. Economies rely on money to facilitate transactions and 
                        to power financial growth. Typically, it is economists who define money, where it comes from, and what it's worth. Here are 
                        the multifaceted characteristics of money.
                    </p>
                </div>
                <div className='generalColumn'>
                    <h3 className='generalHeader'>
                        Medium of Exchange
                    </h3>
                    <p className='generalParagraph'>
                        <p>
                                Before the development of a medium of exchange—that is, money—people would barter to obtain the goods and services they 
                            needed. Two individuals, each possessing some goods the other wanted, would enter into an agreement to trade.
                        </p>
                        <p>
                                Early forms of bartering, however, do not provide the transferability and divisibility that makes trading efficient. For 
                            instance, if someone has cows but needs bananas, they must find someone who not only has bananas but also the desire for meat. 
                            What if that individual finds someone who has the need for meat but no bananas and can only offer potatoes? To get meat, that 
                            person must find someone who has bananas and wants potatoes, and so on.
                        </p>
                        <p>
                                The lack of transferability of bartering for goods is tiring, confusing, and inefficient. But that is not where the problems 
                            end; even if the person finds someone with whom to trade meat for bananas, they may not consider a bunch of bananas to be worth a 
                            whole cow. Such a trade requires coming to an agreement and devising a way to determine how many bananas are worth certain parts 
                            of the cow.
                        </p>
                        <p>
                                Commodity money solved these problems. Commodity money is a type of good that functions as currency. In the 17th and early 18th 
                            centuries, for example, American colonists used beaver pelts and dried corn in transactions. Possessing generally accepted values, 
                            these commodities were used to buy and sell other things. The commodities used for trade had certain characteristics: they were widely 
                            desired and, therefore, valuable, but they were also durable, portable, and easily stored.
                        </p>
                        <p>
                                Another, more advanced example of commodity money is a precious metal, such as gold. For centuries, gold was used to back paper 
                            currency—up until the 1970s. In the case of the U.S. dollar, for example, this meant that foreign governments were able to take their 
                            dollars and exchange them at a specified rate for gold with the U.S. Federal Reserve. What's interesting is that, unlike the beaver 
                            pelts and dried corn (which can be used for clothing and food, respectively), gold is precious purely because people want it. It is 
                            not necessarily useful—you can't eat gold, and it won't keep you warm at night, but the majority of people think it is beautiful, 
                            and they know others think it is beautiful. So, gold is something that has worth. Gold, therefore, serves as a physical token of wealth 
                            based on people's perceptions.
                        </p>
                        <p>
                                This relationship between money and gold provides insight into how money gains its value—as a representation of something valuable.
                        </p>
                    </p>
                </div>
                <div className='generalColumn'>
                    <h4 className='generalHeader'>
                        Impressions Create Everything
                    </h4>
                    <p className='generalParagraph'>
                        <p>
                                The second type of money is fiat money, which does not require backing by a physical commodity. Instead, the value of fiat currencies 
                            is set by supply and demand as well as people's faith in its worth. Fiat money developed because gold was a scarce resource, and rapidly 
                            growing economies growing couldn't always mine enough to back their currency supply requirements. For a booming economy, the need for gold 
                            to give money value is extremely inefficient, especially when its value is really created by people's perceptions.
                        </p>
                        <p>
                                Fiat money becomes the token of people's perception of worth, the basis for why money is created. An economy that is growing is apparently 
                            succeeding in producing other things that are valuable to itself and other economies. The stronger the economy, the stronger its money will be 
                            perceived (and sought after) and vice versa. However, people's perceptions must be supported by an economy that can produce the products and 
                            services that people want.
                        </p>
                        <p>
                                For example, beginning in 1971, the U.S. dollar was taken off the gold standard. The dollar was no longer redeemable in gold, and the price 
                            of gold was no longer fixed to any dollar amount. This was made official in 1976. It was now possible to create more paper money than there was 
                            gold to back it. Only the health of the U.S. economy backs the dollar's value. If the economy stalls, the value of the U.S. dollar will drop both 
                            domestically, through inflation, and internationally, through currency exchange rates. The implosion of the U.S. economy would plunge the world 
                            into a financial dark age, so many other countries and entities are working tirelessly to ensure that never happens.
                        </p>
                        <p>
                                Today, the value of money (not just the dollar, but most currencies) is decided purely by its purchasing power, as dictated by inflation. That 
                            is why simply printing new money will not create wealth for a country. Money is created by a kind of a perpetual interaction between real, tangible 
                            things, our desire for them, and our abstract faith in what has value. Hence, money is valuable because it can get us a desired product or service.
                        </p>
                    </p>
                </div>
                <div className='generalColumn'>
                    <h5 className='generalHeader'>
                       How is money measured?
                    </h5>
                    <p className='generalParagraph'>
                        <p>
                                Exactly how much money is out there, and what forms does it take? Economists and investors ask this question to determine whether there is inflation 
                            or deflation. Money is separated into three categories so that it is more discernible for measurement purposes:
                        </p>   
                        <li className='generalBulletPoint'>
                                <u>M1</u> – This category of money includes all physical denominations of coins and currency; demand deposits, which are checking accounts and NOW 
                            accounts; and travelers' checks. It also includes other forms of liquid deposits and assets such as savings accounts. This category of money is the 
                            narrowest of the three. It is essentially the money used to buy things and make payments (see the "active money" section below).
                        </li>
                        <li className='generalBulletPoint'>
                                <u>M2</u> – With a broader criteria, this category adds all the money found in M1 to all time-related deposits, many types of retirement accounts, 
                            and non-institutional money market funds. This category represents money that can be readily transferred into cash.
                        </li>
                        <li className='generalBulletPoint'>
                                <u>M3</u> – The broadest class of money, M3 combines all money found in the M2 definition and adds to it all large time deposits, institutional money 
                            market funds, short-term repurchase agreements, along with other larger liquid assets. M3 indicates a country's money supply or the total amount of money 
                            within an economy.
                        </li>
                    </p>
                </div>
                <div className='generalColumn'>
                    <h6 className='generalHeader'>
                        How is money created?
                    </h6>
                    <p className='generalParagraph'>
                        <p>
                                We have discussed why and how money, a representation of perceived value, is created in the economy, but another important factor concerning money 
                            and the economy is how a country's central bank can influence and manipulate the money supply.
                        </p>
                        <p>
                                If the Federal Reserve (Fed), the United States' central bank, wants to increase the amount of money in circulation, perhaps to boost economic activity, 
                            the central bank can, of course, print it. However, the physical bills are only a small part of the money supply.
                        </p>
                        <p>
                                Another way for the central bank to increase the money supply is to buy government fixed-income securities in the market. When the central bank 
                            buys these government securities, it puts money into the marketplace, and effectively into the hands of the public. How does a central bank, such as 
                            the Fed, pay for this? As strange as it sounds, the central bank simply creates the money and transfers it to those selling the securities. Alternatively, 
                            the Fed can lower interest rates allowing banks to extend low-cost loans or credit—a phenomenon known as cheap money—and encouraging businesses and 
                            individuals to borrow and spend.
                        </p>
                        <p>
                                To shrink the money supply, perhaps to reduce inflation, the central bank does the opposite and sells government securities. The money with 
                            which the buyer pays the central bank is essentially taken out of circulation.
                        </p>
                        <p>
                                Remember, as long as people have faith in the currency, a central bank can issue more of it. But if the Fed issues too much money, the value 
                            will go down, as with anything that has a higher supply than demand. Therefore, the central bank cannot simply print money as it wants.
                        </p>
                    </p>
                </div>
                <div className='generalColumn'>
                    <h8 className='generalHeader'>
                        What does money symbolize?
                    </h8>
                    <p className='generalParagraph'>
                            In an economic context, money symbolizes perceived value. This allows money to be used as a means of exchanging goods and services. On a personal 
                        level, money can symbolize intangible qualities, including wealth, safety, status, and more.
                    </p>
                </div>
                <div className='generalColumn'>
                    <h9 className='generalHeader'>
                        What is Liquidity?
                    </h9>
                    <p className='generalParagraph'>
                            Liquidity is a measure of how quickly an asset can be converted into legal tender. Cash is the most liquid of all assets. Short-term securities 
                        and assets in money market accounts follow. Less liquid assets include physical items like houses, cars, or jewelry. Though they can ultimately be 
                        converted into legal tender, it may take time to do so, and a conversion might come with depreciation in value.
                    </p>
                </div>
                <div className='generalColumn'>
                    <h10 className="generalHeader">
                        What is the difference between money and currency?
                    </h10>
                    <p className='generalParagraph'>
                            Money and currency are interrelated but different terms. Currency is one form of money. Often issued by a government, it is one type of payment 
                        that people can use within a jurisdiction. Money, however, refers more broadly to a system of perceived value which allows for the exchange of goods 
                        and services.
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



// https://www.investopedia.com/insights/what-is-money/