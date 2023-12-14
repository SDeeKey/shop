    import React, {useEffect} from 'react';
    import {useDispatch, useSelector} from 'react-redux';
    import CheckoutImage from './../../img/btn/Checkout.svg'
    import './CartModal.scss';
    import { removeItemFromCart } from '../../features/user/userSlice';
    import {ROUTES} from "../../utils/routes";
    import deleteImage from './../../img/btn/delete.svg'
    import {Link} from "react-router-dom";

    const CartModal = ({showModal, toggleModal}) => {
        const cartItems = useSelector(state => state.user.cart);
        // предполагается, что так хранятся товары в корзине
        const totalPrice = cartItems.reduce((total, item) => {
            const quantity = item.quantity ?? 1; // Установите значение по умолчанию для quantity
            return total + item.price * quantity;
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
                    <h2 className='titleCart'>КОРЗИНА</h2>
                    <div className="cart-items">
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
                    <div className="cart-summary">
                        <p className='text-OrderSum'>Сумма заказа:   </p>
                        <p className="total-price"> {totalPrice} ₴</p>
                        <Link to={ROUTES.CART}>
                            <button className="checkout-button" >
                                <img src={CheckoutImage} alt="Оформить заказ"/>
                            </button>
                        </Link>

                    </div>
                </div>
            </div>

        );
    };

    export default CartModal;
