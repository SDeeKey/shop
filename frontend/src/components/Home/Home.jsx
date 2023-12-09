import React from 'react';
import Categories from "../categories/categories";
import Novelties from "../novelties/novelties";
import NewCollection from "../NewCollection/NewCollection";
import Ticker from "../Ticker/Ticker";
import TopGoods from "../TopGoods/TopGoods";
import Suits from "../Suits/Suits";
import Usp from "../Usp/Usp";
import Instagram from "../Instagram/Instagram";
import Location from "../location/location";


const Home = () => {
    return (
        <>
            <Categories/>
            <Novelties/>
            <NewCollection/>
            <Location/>
            <Ticker/>
            <TopGoods/>
            <Suits/>
            <Usp/>
            <Instagram/>

        </>
    );
}

export default Home;