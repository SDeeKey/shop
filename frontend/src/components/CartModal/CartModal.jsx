import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CheckoutImage from './../../img/btn/Checkout.svg'
import './CartModal.scss';
import {removeItemFromCart} from '../../features/user/userSlice';
import {ROUTES} from "../../utils/routes";
import deleteImage from './../../img/btn/delete.svg'
import {Link} from "react-router-dom";
import Cat from './../../img/randimg/packetСat.svg'
import toShopping from './../../img/btn/ToShopping.svg'


const CartModal = ({showModal, toggleModal}) => {
    const cartItems = useSelector(state => state.user.cart);
    const isCartEmpty = cartItems.length === 0;
    // предполагается, что так хранятся товары в корзине
    const totalPrice = cartItems.reduce((total, item) => {
        const itemTotal = Object.values(item.sizes ?? {}).reduce((sizeTotal, quantity) => {
            return sizeTotal + item.price * quantity;
        }, 0);
        return total + itemTotal;
    }, 0);

    const dispatch = useDispatch();

    const handleRemoveItem = (id) => {
        dispatch(removeItemFromCart(id));
    };


    useEffect(() => {
        if (showModal) {
            document.body.classList.add('body-modal-open');
            //блокировка прокрутки главной страницы
            document.body.style.overflow = 'hidden';
        } else {
            document.body.classList.remove('body-modal-open');
            //разблокировка прокрутки главной страницы
            document.body.style.overflow = 'visible';
        }
    }, [showModal]);


    return (
        <div className={`cart-modal ${showModal ? 'show' : 'hide'}`}>
            <div className="cart-modal-overlay" onClick={toggleModal}></div>
            <div className="cart-modal-content">
                <button className="close-cart-modal" onClick={toggleModal}><p>&times;</p></button>

                {/* Отображение пустой корзины или списка товаров */}
                {isCartEmpty ? (
                    <div className="empty-cart">
                        <h2 className='titleEmptyCart'>КОРЗИНА</h2>
                        <div className="cat">
                            <img src={Cat} alt="Кот"/>
                        </div>
                        <p>Ваша корзина пуста, но это никогда не поздно исправить! :)</p>
                        <Link to={ROUTES.HOME}>
                            <button className="toShopping" onClick={toggleModal}>
                                <img src={toShopping} alt=""/>
                            </button>
                        </Link>
                    </div>
                ) : (
                    <div className="cart-items">
                        <h2 className='titleCart'>КОРЗИНА</h2>
                        {cartItems.map((item, index) => (
                            <div key={index} className="cart-item">
                                <div className="item-info">
                                    <div className="item-image">
                                        <img src={item.images} alt={item.title}
                                        />
                                    </div>
                                    <div className="item-details">
                                        <p className="item-title">{item.title}</p>
                                        <p className="item-size">Размеры: {
                                            item.sizes && typeof item.sizes === 'object'
                                                ? Object.entries(item.sizes).map(([size, count]) => `${size}(x${count})`).join(', ')
                                                : 'Размер не указан'
                                        }</p>

                                        <p className="item-price">{item.price} ₴</p>

                                    </div>
                                    <button
                                        className="removeItemFromCart"
                                        onClick={() => handleRemoveItem(item.id)}
                                    >
                                        <img className="removeImage" src={deleteImage} alt="delete"/>
                                    </button>
                                </div>


                            </div>
                        ))}
                    </div>
                )}

                {/* Скрыть сводку по корзине, если она пуста */}
                {!isCartEmpty && (
                    <div className="cart-summary">
                        <p className='text-OrderSum'>Сумма заказа: </p>
                        <p className="total-price"> {totalPrice} ₴</p>
                        <Link to={ROUTES.CART}>
                            <button className="checkout-button" onClick={toggleModal}>
                                <img src={CheckoutImage} alt="Оформить заказ"/>
                            </button>
                        </Link>

                    </div>
                )}
            </div>
        </div>

    );
};

export default CartModal;
