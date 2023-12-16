import React from 'react';
import cerved from './../../../img/lines/curved line.svg'
import DeliveryPost from './../../../img/randimg/DeliveryPost.svg'
import DeliveryPayment from './../../../img/randimg/DeliveryPayment.svg'
import DeliveryCourier from './../../../img/randimg/DeliveryCourier.svg'
import DeliveryOnlinePayment from './../../../img/randimg/DeliveryOnlinePayment.svg'
import './DeliveryPage.scss'
import Instagram from "../../Instagram/Instagram";


const DeliveryPage = () => {
    return (
        <section className="refund">
            <div className="contentRefund">
                <div className="TextBlock">
                    <h2>ДОСТАВКА и оплата</h2>
                    <div className="secondLine">
                        <p>Условия доставки и оплаты</p>
                        <img className='cerved' src={cerved} alt="cerved"/>
                    </div>
                </div>
                <div className="allBlocks">
                    <div className="leftBlock">
                        <div className="upperLeftBlock">
                            <img src={DeliveryPost} alt=""/>
                            <p>Доставка осуществляется Новой <br/>
                                почтой день в день при заказе <br/>
                                до 18:00</p>
                        </div>
                        <div className="lowerLeftBlock">
                            <img src={DeliveryPayment} alt=""/>
                            <p>Наложенный платеж на почте <br/>
                                дополнительно оплачивается <br/>
                                2% от суммы</p>
                        </div>
                    </div>
                    <div className="RightBlock">
                        <div className="upperRightBlock">
                            <img src={DeliveryCourier} alt=""/>
                            <p>Курьерская доставка 50 грн</p>
                        </div>
                        <div className="lowerRightBlock">
                            <img src={DeliveryOnlinePayment} alt=""/>
                            <p>При оплате онлайн никаких <br/>
                                больше дополнительных <br/>
                                процентов</p>
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

export default DeliveryPage;