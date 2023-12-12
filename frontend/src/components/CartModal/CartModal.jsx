import React from 'react';
import {useSelector} from 'react-redux';
import './CartModal.scss'; // Путь к вашему SCSS файлу для стилей

const CartModal = ({showModal, toggleModal}) => {
    const cartItems = useSelector(state => state.user.cart);
    // предполагается, что так хранятся товары в корзине
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className={`cart-modal ${showModal ? 'show' : 'hide'}`}>
            <div className="cart-modal-overlay" onClick={toggleModal}></div>
            <div className="cart-modal-content">
                <button className="close-cart-modal" onClick={toggleModal}>&times;</button>
                <h2>КОРЗИНА</h2>
                <div className="cart-items">
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <div className="item-info">
                                <div className="item-image">
                                    <img src={item.image} alt={item.title}/>
                                </div>
                                <div className="item-details">
                                    <p className="item-title">{item.title}</p>
                                    <p className="item-size">Размер: {item.size}</p>
                                    <p className="item-price">{item.price} €</p>
                                </div>
                            </div>
                            <div className="item-quantity">
                                <p>Количество: {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <p className="total-price">Сумма заказа: {totalPrice} €</p>
                    <button className="checkout-button">Посмотреть заказ</button>
                </div>
            </div>
        </div>

    );
};

export default CartModal;
