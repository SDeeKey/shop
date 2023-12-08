import React, {useState, useEffect} from 'react'
import {useDispatch} from "react-redux";
import {getCategories} from "../../features/categories/categoriesSlice";

import Header from '../header/header.jsx';
import Categories from '../categories/categories.jsx';
import Novelties from '../novelties/novelties.jsx';
import NewCollection from "../NewCollection/NewCollection.jsx";
import Location from "../location/location.jsx";
import Ticker from "../Ticker/Ticker.jsx";
import TopGoods from "../TopGoods/TopGoods.jsx";
import Suits from "../Suits/Suits";
import Usp from "../Usp/Usp";
import Instagram from "../Instagram/Instagram";
import Footer from "../footer/footer";
import AppRoutes from "../Routes/Routes";


const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch]);

    const [data, setData] = useState(null);
    const [items, setItems] = useState([{
        id: 1,
        title: 'Свитшот вставка клетка',
        img: 'Sweatshirt.png',
        price: '1099'
    }]);

    // useEffect(() => {
    //     fetch('')
    //         .then(response => response.json())
    //         .then(data => setData(data.message));
    // }, []);

    return (
        <div className="app">
            <Header/>
            <Categories/>
            <Novelties/>
            <NewCollection/>
            <Location/>
            <Ticker/>
            <TopGoods/>
            <Suits/>
            <Usp/>
            <Instagram/>
            <Footer/>
            <AppRoutes/>
        </div>
    );

}

export default App;
