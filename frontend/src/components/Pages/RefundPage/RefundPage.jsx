import React from 'react';
import cerved from './../../../img/lines/curved line.svg'
import refundBag from './../../../img/randimg/refundBag.svg'
import refundBox from './../../../img/randimg/refundBox.svg'
import refundAirDrop from './../../../img/randimg/refundAirDrop.svg'
import refundMoneyBack from './../../../img/randimg/refundMoneyBack.svg'
import './RefundPage.scss'
import Instagram from "../../Instagram/Instagram";


const RefundPage = () => {
    return (
        <section className="refund">
            <div className="contentRefund">
                <div className="TextBlock">
                    <h2>Обмен и возврат</h2>
                    <div className="secondLine">
                        <p>Правила обмена и возврата</p>
                        <img className='cerved' src={cerved} alt="cerved"/>
                    </div>
                </div>
                <div className="allBlocks">
                    <div className="leftBlock">
                        <div className="upperLeftBlock">
                            <img src={refundBag} alt=""/>
                            <p>Вы легко можете обменять либо вернуть вещь в течение 14 дней после покупки, если вещь не
                                была
                                в носке и не стиралась. Для этого свяжитесь с нами любым удобным способом.</p>
                        </div>
                        <div className="lowerLeftBlock">
                            <img src={refundBox} alt=""/>
                            <p>Вещи, которые вы отправляете нам, мы забираем с почты 2 раза в неделю.</p>
                        </div>
                    </div>
                    <div className="RightBlock">
                        <div className="upperRightBlock">
                            <img src={refundAirDrop} alt=""/>
                            <p>При обмене, мы отправляем вещь
                                в тот же либо на следующий день, после того как забрали вещь с почты.</p>
                        </div>
                        <div className="lowerRightBlock">
                            <img src={refundMoneyBack} alt=""/>
                            <p>При возврате, деньги возвращаются в течение 5 рабочих дней, после того как забрали вещь с
                                почты и получили реквизиты для возврата.</p>
                        </div>
                    </div>
                </div>
                <div className="instagram">
                    <Instagram/>
                </div>
            </div>
        </section>
    );
}

export default RefundPage;