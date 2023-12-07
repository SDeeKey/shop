import logoImg from '../../img/icon/logo.svg'
import locationItem from '../../img/icon/location-item.svg'
import phoneItem from '../../img/icon/phone-item.svg'
import searchItem from '../../img/icon/search-item.svg'
import heartItem from '../../img/icon/heart-item.svg'
import bagItem from '../../img/icon/shopping-bag-item.svg'
import './header.scss'
import Basket from '../../components/Basket/Basket'
import React, {useContext, useState} from 'react'
import BackContext from "../novelties/backContext";

function Header() {
    // let [cartOpen, setCartOpen] = useState(false)
    const sH = useContext(BackContext)
    const [showBasket, setShowBasket] = useState(false)

    const toggleBasket = () => {
        setShowBasket(prevState => !prevState);

        // if (showBasket? <Basket/> : <Basket/>
        // else { }
    };


    // $(document).ready(function($) {
    //     $('.bagItem').click(function() {
    //         $('.background').fadeIn();
    //         return false;
    //     });
    //
    //     $('.bagItem').click(function() {
    //         $(this).parents('.background').fadeOut();
    //         return false;
    //     });
    //
    //     $(document).keydown(function(e) {
    //         if (e.keyCode === 27) {
    //             e.stopPropagation();
    //             $('.background').fadeOut();
    //         }
    //     });
    //
    //     $('.background').click(function(e) {
    //         if ($(e.target).closest('.shop_cart').length == 0) {
    //             $(this).fadeOut();
    //         }
    //     });
    // });


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
                        {/*<div className="background"></div>*/}
                        {/*<img className={`bagItem ${cartOpen && 'active'}`}*/}
                        {/*     onClick={() => setCartOpen(cartOpen = !cartOpen)} src={bagItem} alt='bagItem'></img>*/}

                        {/*{cartOpen && (*/}
                        {/*    <div className="shop_cart">*/}

                        {/*    </div>*/}
                        {/*)}*/}
                        <img className={`bagItem`}
                             onClick={e=> {
                                 toggleBasket();
                                 sH.setShowBackground(!sH.showBackground)
                                 console.log((showBasket?"TRUE":"FALSE"))
                             }}
                             src={bagItem}
                             alt='bagItem'>
                        </img>

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