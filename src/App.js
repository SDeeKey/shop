import Header from './components/header/header.jsx';
import Categories from './components/categories/categories.jsx';
import Novelties from './components/novelties/novelties.jsx';
import NewCollection from "./components/NewCollection/NewCollection.jsx";
import Location from "./components/location/location.jsx";
import TopGoods from "./components/TopGoods/TopGoods";

function App() {
    return (
        <div className="App">
            <Header/>
            <Categories/>
            <Novelties/>
            <NewCollection/>
            <Location/>
            <TopGoods/>
        </div>
    );
}

export default App;
