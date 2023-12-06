import Header from './components/header/header.jsx';
import Categories from './components/categories/categories.jsx';
import Novelties from './components/novelties/novelties.jsx';
import NewCollection from "./components/NewCollection/NewCollection.jsx";
import Location from "./components/location/location.jsx";
import Ticker from "./components/Ticker/Ticker.jsx";
import TopGoods from "./components/TopGoods/TopGoods.jsx";
import Suits from "./components/Suits/Suits";
import Usp from "./components/Usp/Usp";
import Instagram from "./components/Instagram/Instagram";
import Footer from "./components/footer/footer";

import React, {useState, useEffect} from 'react'

function App() {
    const [data, setData] = useState(null);
    const [items, setItems] = useState([{
        id: 1,
        title: 'Свитшот вставка клетка',
        img: 'Sweatshirt.png',
        price: '1099'
    }]);

    useEffect(() => {
        fetch('/api')
            .then(response => response.json())
            .then(data => setData(data.message));
    }, []);


    return (
        <div className="App">
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
        </div>
    );

}

export default App;
