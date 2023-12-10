import React from 'react';
import './TopGoods.scss';
import Banner from '../../img/randimg/TopGoods_Banner.png';
import SeeAllred from "../../img/btn/SeeAllred.png";
import Products from "../Products/Products";
import {useSelector} from "react-redux";


function TopGoods() {
    const {list} = useSelector(({products}) => products)

    return (
        <section className="TopGoods">
            <div className="container_TopGoods">
                <div className="content_TopGoods">
                    <div className="vertical-cards">
                        <Products size="small" products={[list[1]]} amount={1}/>
                        <Products size="small" products={[list[3]]} amount={2}/>
                    </div>
                    <img className='Banner' src={Banner} alt="Banner"/>
                    <Products size="large" products={list} amount={1}/>
                </div>
                <img className='SeeAllred' src={SeeAllred} alt="SeeAllred"/>
            </div>
        </section>
    );
}

export default TopGoods;
