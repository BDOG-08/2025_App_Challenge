'use client';
import Link from 'next/link'
import "./stocksPage.css";

export default function stocksPage(){
    return(
        <div>
            <div className='section1'>
                <div className='header1'>
                    <h1>
                        Stocks
                    </h1>
                </div>
                <div className='generalColumn'>
                    <h2 className='generalHeader'>
                        What are Stocks
                    </h2>
                    <p className='generalParagraph'>
                            A stock exchange, or stock market, is a system for buying and selling securities, 
                        or stocks and bonds. A stock is a share in the ownership of a company. A bond is an 
                        agreement to lend money to a company for a certain amount of time. Companies sell 
                        securities to people to get the money they need to grow. People buy securities as 
                        investments, or ways of possibly earning money.
                    </p>
                </div>
                <div className='generalColumn'>
                    <h3 className='generalHeader'>
                        What are stock exchanges?
                    </h3>
                    <p className='generalParagraph'>
                            Many countries have one or more stock exchanges. Some important exchanges are 
                        the New York Stock Exchange (in the United States), the London Stock Exchange (in England), 
                        and the Tokyo Stock Exchange (in Japan). These and other exchanges do much of their business 
                        in buildings. NASDAQ, in the United States, is an exchange that does its business electronically,
                        or online. 
                        
                            A number of companies belong to each stock exchange. The companies sell securities to 
                        people. People then use the exchange to trade (sell and buy) the securities among themselves. The 
                        exchange lists the securities for sale and their prices. It also handles the transfer of securities 
                        between sellers and buyers. 
                        
                            The prices of different securities rise or fall, or both, throughout the day, every day the 
                        exchange is open. People make money by selling securities at a higher price than they paid for them.
                    </p>
                </div>
                <div className='generalColumn'>
                    <h4 className='generalHeader'>
                        The causes for the rises and falls of prices
                    </h4>
                    <p className='generalParagraph'>
                            Many factors affect the price of a company’s securities. If a company is successful, the price of its 
                        stock usually will go up. The health of the economy, laws passed by the government, and wars also can cause 
                        securities’ prices to rise or fall. Even people’s feelings can affect prices at a stock exchange. For example, 
                        if people fear that prices will go down, they may start selling their securities. But if many people sell large 
                        numbers of securities, they can actually make prices go down. If widespread selling continues, a stock market 
                        crash can happen. A crash means that the prices have fallen so low that very few people are willing to buy 
                        securities. As a result, the people who own the securities have little chance of getting their money back.
                    </p>
                </div>
                <div className='generalColumn'>
                    <h5 className='generalHeader'>
                        What was the Great Depression?
                    </h5>
                    <p className='generalParagraph'>
                            The famous stock market crash happened in the United States in October 1929. Over several days panicked 
                        investors sold so many shares of stock that the whole market collapsed. Almost every part of the economy 
                        suffered. Farmers could not sell their crops, banks and businesses closed, and wages fell to very low levels. 
                        This period of hardship lasted about 10 years.    
                    </p>
                </div>
                <div className='generalColumn'>
                    <h6 className='generalHeader'>
                        Types of Stocks that you should know
                    </h6>
                    <ul className='generalParagraph'>
                        <li>
                            <b>Publicly traded stock</b>
                        </li>
                        <li>
                                Publicly traded stock is probably what you have in mind when you think about stocks. It's the kind of stock 
                            typically purchased through brokerages and investment apps, and its price movements may be reported in the news. 
                            A stock is "public" when its company lists it on a major exchange, like the New York Stock Exchange (NYSE) or 
                            Nasdaq. This enables everyday investors to buy and sell it, but it also opens companies up to more regulation. 
                            If companies are accessible to everyday investors, the Securities and Exchange Commission (SEC) requires that 
                            the companies disclose certain aspects of their finances to help investors make informed decisions. Private 
                            companies can go public through processes like initial public offerings (IPOs) and direct listings, or if they 
                            are acquired by special purpose acquisition companies (SPACs).
                        </li>
                        <li>
                            <b>Private stock</b>
                        </li>
                        <li>
                                Private stock represents ownership in a private company. Unlike public stock, private stock can't easily be 
                            bought or sold through a normal brokerage account. Usually, any sale of private stock needs to be approved by 
                            the company itself. Private stock is less commonly encountered by the typical investor, which can be a good thing. 
                            Private companies are much less regulated than public ones and have no obligation to inform the public of their 
                            financial health, making it harder for outsiders to judge investment potential. If you work for a private company, 
                            however, you may receive private stock as part of your benefits or compensation package.
                        </li>
                        <li>
                            <b>Common stock</b>
                        </li>
                        <li>
                                Common stock is the "average joe" of equity. It's the public and private stock type you're most likely to buy 
                            and sell. Common stock represents ownership of a company and gives the shareholder voting rights, letting them 
                            influence that company's future. A stock derives value based on the fundamentals of the company and market forces. 
                            Return on investment can be broken down to appreciation and dividends. Common stockholders are the last people—behind 
                            bond holders, preferred stockholders, and other debt holders—to be compensated if a company goes bankrupt and must 
                            sell its holdings.
                        </li>
                        <li>
                            <b>Preferred stock</b>
                        </li>
                        <li>
                                Preferred stocks are like a mix between a common stock and a bond. They can offer predictable income through fixed 
                            dividends—like a bond might with interest payments—that are typically paid at regular intervals. Their shares also grant 
                            you ownership of a company like common stocks and may appreciate in value as the company becomes more desirable. And 
                            "convertible preferred stock" may be converted to common shares by the company or by you if certain conditions are met. 
                            Unlike common stocks, preferred stocks don't come with shareholder voting rights. Another difference: Preferred shareholders 
                            always receive dividends and asset payouts before holders of common shares.
                        </li>
                        <li>
                            <b>Growth stock</b>
                        </li>
                        <li>
                                Growth stocks are shares of companies that investors expect to grow sales or earnings faster than the market average. 
                            Usually, growth stocks belong to smaller, newer companies that have a lot of potential but (at least in the moment) not a 
                            lot of profit. Growth stocks typically don't pay dividends, as the companies may prefer to invest extra cash in themselves 
                            to grow faster. Growth stocks tend to have relatively higher stock prices compared to their earnings. When you buy one, 
                            you're hoping that company's growth exceeds current expectations, which can drive the share price up. There's no guarantee 
                            that a growth company will get there. And if it doesn't, investor favor may fade, sending prices down. This makes them riskier 
                            investments.
                        </li>
                        <li>
                            <b>Value stock</b>
                        </li>
                        <li>
                                Value stocks are associated with companies that investors think trade below what they're really worth based on their earnings, 
                            and tend to have relatively lower stock prices compared to their earnings. They tend to be larger, more established companies with 
                            solid financial histories. Some even pay dividends. If you own a value stock, you're hoping the market eventually realizes the stock 
                            is undervalued, and its price bounces up. If it doesn't, you may be left holding a stock with good financial fundamentals but that 
                            never realizes its potential.
                        </li>
                        <li>
                            <b>Income stock</b>
                        </li>
                        <li>
                                Unlike growth or value stocks, investors who buy income stocks are focused on income, generating profit primarily from dividend 
                            payments. Share price appreciation is an added bonus. Income investing can be risky because companies can reduce their dividend or 
                            choose not to pay one at any time. To help decrease that risk, income investors focus on companies' dividend history, making sure 
                            they've consistently paid or raised their dividend even in down markets.
                        </li>            
                    </ul>
                </div>
                <div className='generalColumn'>
                    <h8 className='generalHeader'>
                       What can you earn from stocks?
                    </h8>
                    <ul className='generalParagraph'>
                        <li>
                            <b>Share appreciation</b> When a company does well financially or becomes more desirable, the price of its stock can increase. 
                        This allows investors to sell their shares to other investors for more than they paid.
                        </li>
                        <li>
                            <b>Dividends</b> Some companies may decide to share a portion of their profits with investors through cash payments called dividends. 
                        A dividend yield is expressed as a percentage, often 1% to 3%. It is a calculation based off of the annualized dividend payout of a 
                        stock compared to the stock price. Companies may pay dividends one quarter and skip the next, depending on their goals and financial 
                        situation.
                        </li>
                    </ul>
                </div>
                <div className='generalColumn'>
                    <h9 className='generalHeader'>
                        What rights do you have as a shareholder?
                    </h9>
                    <p className='generalParagraph'>
                            Owning stock means owning a slice of a company, and that usually comes with certain rights. For one, shareholders generally have a 
                        claim to the company's assets, though others like bondholders might have priority if the company goes bankrupt and sells off assets to 
                        pay back creditors and investors. But assuming all goes well, shareholders have a right to the company's earnings, such as if the company 
                        decides to issue dividends that pay out a given amount for each share owned. And if the company is deemed to become more valuable, generally 
                        because of growing revenue and profit, then its stock price generally goes up too, so shareholders may be able to sell the stock for more 
                        than what they bought it for. Owning stock can also come with voting rights, such as for electing the board of directors and making decisions 
                        on issues like executive pay. However, stock can be divided into different share classes, such as with some stockholders buying shares that 
                        do not have voting rights.
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

// https://www.investopedia.com/terms/s/stock.asp
// https://kids.britannica.com/kids/article/stock-exchange/353812