import Header from './components/header/header.jsx';
import Categories from './components/categories/categories.jsx';
import Novelties from './components/novelties/novelties.jsx';
import NewCollection from "./components/NewCollection/NewCollection.jsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <Categories/>
            <Novelties/>
            <NewCollection/>
        </div>
    );
}

export default App;
