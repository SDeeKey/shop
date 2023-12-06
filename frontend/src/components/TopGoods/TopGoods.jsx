import React from 'react';
import './TopGoods.scss';
import Banner from '../../img/randimg/TopGoods_Banner.png';
import Card from "../card/Card";
import bomber_jacket from "../../img/clothes/bomber_jacket.png";
import T_shirt_dress from "../../img/clothes/T-shirt_dress.png";
import sheer_dress from "../../img/clothes/sheer_dress.png";
import SeeAllred from "../../img/btn/SeeAllred.png";


function TopGoods() {
    return (
        <section className="TopGoods">
            <div className="container_TopGoods">
                <div className="content_TopGoods">
                    <div className="vertical-cards">
                        <Card title="Бомбер Gone Crazy хаки" price="2499" img={bomber_jacket} width="274px"
                              height="300px"/>
                        <Card title="Платье-футболка рыбы в аквариуме" price="899" img={T_shirt_dress} width="274px"
                              height="300px"/>
                    </div>
                    <img className='Banner' src={Banner} alt="Banner"/>
                    <Card title="Платье прозрачное в цветочек черное" price="1299" img={sheer_dress} width="360px"
                          height="530px"/>
                </div>
                <img className='SeeAllred' src={SeeAllred} alt="SeeAllred"/>
            </div>
        </section>
    );
}

export default TopGoods;
