import logoImg from '../../img/icon/logo.svg'
import locationItem from '../../img/icon/location-item.svg'
import phoneItem from '../../img/icon/phone-item.svg'
import searchItem from '../../img/icon/search-item.svg'
import heartItem from '../../img/icon/heart-item.svg'
import bagItem from '../../img/icon/shopping-bag-item.svg'
import './header.scss'
import React, {useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ROUTES} from "../../utils/routes";
import CartModal from "../CartModal/CartModal";
import {setActiveCategory} from "../../features/products/productsSlice";


const Header = () => {
    const products = useSelector(state => state.products.list);


    // Состояние для хранения результатов поиска
    const [searchInput, setSearchInput] = useState(''); // Объявление состояния
    const [searchResults, setSearchResults] = useState([]);

    // Обновляем результаты поиска каждый раз, когда изменяется ввод поиска
    useEffect(() => {
        if (searchInput) {
            const filteredProducts = products.filter(product =>
                product.title.toLowerCase().includes(searchInput.toLowerCase())
            );
            setSearchResults(filteredProducts);
        } else {
            setSearchResults([]);
        }
    }, [searchInput]);


    //Показ корзины
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const {list} = useSelector(({categories}) => categories)


    // Функция для обновления состояния ввода
    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    //Переход на категории
    const dispatch = useDispatch();

    const handleCategoryClick = (categoryId, categoryName) => {
        if (categoryName === '#Boorivagirls') {
            // Переход на специальную страницу для категории #Boorivagirls
            window.location.href = '/boorivagirls';
        } else {
            // Обычная логика для остальных категорий
            dispatch(setActiveCategory(categoryId));
        }
    };


    // Для вывода количества товара на значке корзины
    const cartItems = useSelector(state => state.user.cart);
    const itemCount = cartItems.reduce((total, item) => {
        const sizes = item.sizes;
        const sizesArray = Object.values(sizes);
        return total + sizesArray.reduce((sum, count) => sum + count, 0);
    }, 0);


    return (
        <header className='header'>
            <div className='container'>
                <div className='header_row'>
                    <div className="firstLine">
                        <div className='contacts_nav'>
                            <img className='locationItem' src={locationItem} alt='locationItem'></img>
                            <a href='#!'>Киев, Нижний вал, 37</a>
                            <img className='phoneItem' src={phoneItem} alt='phoneItem'></img>
                            <a href='#!'>+38 063 843 34 71</a>
                        </div>
                        <div className="logo">
                            <Link to={ROUTES.HOME}>
                                <img className='header_logo' src={logoImg} alt='logo'></img>
                            </Link>
                        </div>
                        <div className='searchItems'>
                            <Link to={ROUTES.HOME}>
                                <img className='searchIcon' src={searchItem} alt='searchItem'/>
                            </Link>
                            <div className="input">
                                <input
                                    type="text"
                                    name='search'
                                    placeholder='Поиск'
                                    autoComplete='off'
                                    onChange={handleInputChange}
                                    value={searchInput}
                                />
                                {searchInput && searchResults.length > 0 && (
                                    <div className="search-dropdown">
                                        <ul>
                                            {searchResults.map((item) => (
                                                <li key={item.id} className="search-item">
                                                    <Link
                                                        to={`/${item.category.name.replace(/\s+/g, '-').toLowerCase()}/product/${item.id}`}
                                                        onClick={() => setSearchInput('')}
                                                        className="search-link"
                                                    >
                                                        <img src={item.images[0]} alt={item.title}
                                                             className="search-image"/>
                                                        <span className="search-title">{item.title}</span>
                                                        <span className="search-price">{item.price} ₴</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            {/* для выпадающего окна поиска*/}
                            <Link to={ROUTES.FAVORITES} className='favourites'>
                                <img className='heartItem' src={heartItem} alt='heartItem'></img>
                            </Link>
                            <div className='cart'>
                                <img className={`bagItem`}
                                     style={{cursor: 'pointer'}}
                                     onClick={toggleModal}
                                     src={bagItem}
                                     alt='bagItem'/>
                                <CartModal showModal={showModal} toggleModal={toggleModal}/>
                            </div>


                            <span className='count'>{itemCount}</span>
                        </div>
                    </div>
                    <nav className='header_nav'>
                        <ul>
                            {list.map(({id, name}) => (
                                <li key={id}>
                                    <NavLink
                                        className={({isActive}) => `link ${isActive ? 'active' : ""}`}
                                        to={`/category/${id}`}
                                        onClick={() => handleCategoryClick(id, name)}
                                    >
                                        {name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className='line'></div>
                </div>
            </div>
        </header>
    )
}

export default Header;