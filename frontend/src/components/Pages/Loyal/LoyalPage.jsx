import React from 'react';
import cerved from './../../../img/lines/curved line.svg'
import loyalSale from './../../../img/randimg/loyalSale.svg'
import loyalSecretClub from './../../../img/randimg/loyalSecretClub.svg'

import './LoyalPage.scss'
import Usp from "../../Usp/Usp";
import Instagram from "../../Instagram/Instagram";

const LoyalPage = () => {
    return (
        <section className="loyal">
            <div className="contentLoyal">
                <div className="textBlock">
                    <h2>Все о лояльности</h2>
                    <div className="secondBlock">
                        <p>система лояльности</p>
                        <img className='cerved' src={cerved} alt="cerved"/>
                    </div>
                </div>
                <div className="upperBlock">
                    <div className="LeftSideBlockUpper">
                        <img src={loyalSale} alt="loyalSale"/>
                        <h2> #boorivagirls</h2>
                        <p className='firstLineUpperLeftBlock'>Первая покупка >699 грн*</p>
                        <p className='secondLineUpperLeftBlock'>*вещь не находится на скидке</p>
                    </div>
                    <div className="RightSideBlockUpper">
                        <p className='firstLineUpperRightBlock'>5% бонусы от суммы чека</p>
                        <p className='secondLineUpperRightBlock'>-30% скидка на одну вещь <br/>
                            за 3 дня до и 3 дня после <br/>
                            дня рождения</p>
                        <span>*Баллами можно рассчитываться только <br/>
                            за те вещи, которые находятся не на скидке</span>
                    </div>
                </div>
                <div className="lowerBlock">
                    <div className="LeftSideBlockLower">
                        <img src={loyalSecretClub} alt="loyalSecretClub"/>
                        <h2> #boorivasis</h2>
                        <p>Сумма покупок >5000 грн</p>

                    </div>
                    <div className="RightSideBlockLower">
                        <p className='firstLineLowerRightBlock'>10% бонусы от суммы чека</p>
                        <p className='secondLineLowerRightBlock'>-30% скидка на одну вещь <br/>
                            за 3 дня до и 3 дня после <br/>
                            дня рождения</p>
                        <p className='thirdLineLowerRightBlock'>*Баллами можно рассчитываться только <br/>
                            за те вещи, которые находятся не на скидке</p>
                    </div>
                </div>
                <div className="usp">
                    <Usp/>
                </div>
                <div className="Instagram">
                    <Instagram/>
                </div>
            </div>
        </section>
    );
}

export default LoyalPage;