import logoImg from '../../img/icon/logo.svg'
import locationItem from '../../img/icon/location-item.svg'
import phoneItem from '../../img/icon/phone-item.svg'
import searchItem from '../../img/icon/search-item.svg'
import heartItem from '../../img/icon/heart-item.svg'
import bagItem from '../../img/icon/shopping-bag-item.svg'
import './header.scss'
import React, {useState} from 'react'

function Header() {
    let [cartOpen, setCartOpen] = useState(false)


    return <header className='header'>
        <div className='container'>
            <div className='header_row'>
                <div className="firstLine">
                    <div className='contacts_nav'>
                        <img className='locationItem' src={locationItem} alt='locationItem'></img>
                        <a href='#!'>Киев, Нижний вал, 37</a>
                        <img className='phoneItem' src={phoneItem} alt='phoneItem'></img>
                        <a href='#!'>+38 063 843 34 71</a>
                    </div>
                    <img className='header_logo' src={logoImg} alt='logo'></img>
                    <div className='searchItems'>
                        <img className='searchIcon' src={searchItem} alt='searchItem'></img>
                        <a href='#!'>Поиск</a>
                        <img className='heartItem' src={heartItem} alt='heartItem'></img>
                        <img className={`bagItem ${cartOpen && 'active'}`}
                             onClick={() => setCartOpen(cartOpen = !cartOpen)} src={bagItem} alt='bagItem'></img>

                        {cartOpen && (
                            <div className="shop_cart">

                            </div>
                        )}
                    </div>
                </div>
                <nav className='header_nav'>
                    <ul>
                        <li><a href='#!'>НОВИНКИ</a></li>
                        <li><a href='#!'>ПЛАТЬЯ</a></li>
                        <li><a href='#!'>ВЕРХ</a></li>
                        <li><a href='#!'>НИЗ</a></li>
                        <li><a href='#!'>КУРТКИ</a></li>
                        <li><a href='#!'>МЕЛОЧИ</a></li>
                        <li><a href='#!'>КОСТЮМЫ</a></li>
                        <li><a href='#!'>#BOORIVAGIRLS</a></li>
                    </ul>
                </nav>
                <div className='line'></div>
            </div>
        </div>
    </header>
}

export default Header;