import logoImg from './../../img/icon/logo.svg'
import locationItem from './../../img/icon/location-item.svg'
import phoneItem from './../../img/icon/phone-item.svg'
import searchItem from './../../img/icon/search-item.svg'
import heartItem from './../../img/icon/heart-item.svg'
import bagItem from './../../img/icon/shopping-bag-item.svg'
import './header.css'

function Header () {
    return <header className='header'>
        <div className='container'>
            <div className='header__row'>
                <div className='contacts__nav'>
                        <img src={locationItem} alt='locationItem'></img>
                        <ul>
                            <li><a href='#!'>Киев, Нижний вал, 37</a></li>
                        </ul>
                        <img src={phoneItem} alt='phoneItem'></img>
                        <ul>
                            <li><a href='#!'>+38 063 843 34 71</a></li>
                        </ul>
                </div>    
                 <div className='header__logo'>
                    <img src={logoImg} alt='logo'></img>
                </div>
                <div className='searchItems'>
                    <img className='searchIcon' src={searchItem} alt='searchItem'></img>
                    <ul>
                        <li><a href='#!'>Поиск</a></li>
                    </ul>
                    <div className='heartAndBag'>
                        <img src={heartItem} alt='heartItem'></img>
                        <img className='bagItem' src={bagItem} alt='bagItem'></img>
                    </div>
                </div>
                
                <nav className='header__nav'>
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