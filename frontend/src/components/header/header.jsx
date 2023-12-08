import logoImg from '../../img/icon/logo.svg'
import locationItem from '../../img/icon/location-item.svg'
import phoneItem from '../../img/icon/phone-item.svg'
import searchItem from '../../img/icon/search-item.svg'
import heartItem from '../../img/icon/heart-item.svg'
import bagItem from '../../img/icon/shopping-bag-item.svg'
import './header.scss'
import React, {useState} from 'react';
import Basket from './../Basket/Basket'
import {Link, NavLink, Routes} from "react-router-dom";
import {useSelector} from "react-redux";


const Header = () => {
    // const [isModalOpen, setModalOpen] = useState(false);
    // const toggleModal = () => setModalOpen(!isModalOpen);
    const {list} = useSelector(({categories}) => categories)

    // Состояние для управления вводом в поле поиска
    const [searchInput, setSearchInput] = useState('');

    // Функция для обновления состояния ввода
    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    };


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
                            <Link to={Routes.HOME}>
                                <img className='header_logo' src={logoImg} alt='logo'></img>
                            </Link>
                        </div>
                        <div className='searchItems'>
                            <Link to={Routes.HOME}>
                                <img className='searchIcon' src={searchItem} alt='searchItem'/>
                            </Link>
                            <div className="input">
                                <input type="Поиск"
                                       name='search'
                                       placeholder='Поиск'
                                       autoComplete='off'
                                       onChange={handleInputChange}
                                       value={searchInput}

                                />
                            </div>
                            {/* для выпадающего окна поиска*/}
                            {/*{false && <div className="box"></div>}*/}
                            <Link to={Routes.HOME} className='favourites'>
                                <img className='heartItem' src={heartItem} alt='heartItem'></img>
                            </Link>
                            <Link to={Routes.CART} className='cart'>
                                <img className={`bagItem`}
                                     style={{cursor: 'pointer'}}
                                    // onClick={toggleModal}
                                     src={bagItem}
                                     alt='bagItem'/>
                            </Link>
                            <span className='count'>2</span>
                        </div>
                    </div>
                    {/*<Basket isOpen={isModalOpen} closeModal={toggleModal}/>*/}
                    <nav className='header_nav'>
                        <ul>
                            {list.map(({id, name}) => (
                                <li key={id}>
                                    <NavLink
                                        className={({isActive}) =>
                                            `link ${isActive ? 'active' : ""}`}
                                        to={`/categories/${id}`}>{name}</NavLink>
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