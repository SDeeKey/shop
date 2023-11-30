import './TopGoods.scss';

function TopGoods() {
    const tickerText = Array(50).fill('Топовые товары');

    return (
        <section className="TopGoods">
            <div className="container_TopGoods">
                <div className="content_TopGoods">
                    <div className="ticker-wrap">
                        <div className='line_1'></div>
                        <div className='line_2'></div>
                        <div className="ticker-move">
                            {tickerText.map((phrase, index) => (
                                <span key={index} className="ticker-item">
                  {phrase}
                                    {index !== tickerText.length - 1 && <span className="ticker-space"></span>}
                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TopGoods;
