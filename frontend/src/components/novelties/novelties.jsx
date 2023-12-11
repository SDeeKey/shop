import curved_line from '../../img/lines/curved line.svg'
import SeeAll from '../../img/btn/SeeAll.png'
import './novelties.scss';
import Products from "../Products/Products";
import React from "react";
import {useSelector} from "react-redux";

function Novelties() {
    const {list} = useSelector(({products}) => products)

    return <section className='novelties'>
        {/* Cамый большой контейнер, поторый вмещает всю информацию про новинки */}
        <div className='container__novelties'>
            {/* Контейнер, который вмещает название(Новинки и кривулю) */}
            <div className="titleBlock">
                <p className='first_novelties'>НОВИНКИ</p>
                <div className="underTitle">
                    <p className='second_novelties'>Новинки</p>
                    <img className='curved_line' src={curved_line} alt='curved line'></img>
                </div>
            </div>
            {/* Контейнер, который вмещет все карточки */}
            <div className='novelties_card'>
                {/* Конкретные карточки */}
                <Products size="large" products={list} amount={4}/>
            </div>
            <div className='button'>
                <img src={SeeAll} alt="SeeAll"/>
            </div>
        </div>
    </section>
}

export default Novelties;