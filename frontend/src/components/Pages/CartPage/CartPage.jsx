import React, {useState} from 'react';
import cervedLIne from '../../../img/lines/curved line_pink.svg'
import Confirm from '../../../img/btn/confirmOrder.svg'
import './CartPage.scss'
import CartModal from "../../CartModal/CartModal";
import {useDispatch, useSelector} from "react-redux";
import {removeItemFromCart} from "../../../features/user/userSlice";
import deleteImage from "../../../img/btn/delete.svg";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../utils/routes";
import CheckoutImage from "../../../img/btn/Checkout.svg";

const CartPage = () => {
    // Состояние для отслеживания выбранной радиокнопки
    const [selectedDiliveryMethod, setSelectedDiliveryMethod] = useState('option4');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('option2');
    const [checked, setChecked] = useState(true);

    const cartItems = useSelector(state => state.user.cart);

    const changeCheckBox = (event) => {
        {
            setChecked(!checked);
        }
    }


    // Обработчик изменения выбора радиокнопки
    const handleDiliveryMethod = (event) => {
        setSelectedDiliveryMethod(event.target.value);
    }

    // Обработчик изменения выбора радиокнопки
    const handlePaymentMethod = (event) => {
        setSelectedPaymentMethod(event.target.value);
    }

    //Для показа значений корзины
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

    return (
        <section className='cartPage'>
            <div className='contentCartPage'>
                <div className="leftColumn">
                    <div className="firstBlock">
                        <div className="firstBlockLeftSide">
                            <div className="upper_1">
                                <p className='firstBlockNumber'>1</p>
                                <img className='cervedFirstBlock' src={cervedLIne} alt=""/>
                            </div>
                            <p className='Contact_info'>Контактные данные</p>
                        </div>
                        <div className="firstBlockRightSide">
                            <input type="text" placeholder='Имя'/>
                            <input type="text" placeholder='Фамилия'/>
                            <input type="tel" placeholder='+38 (___) ___-__-__ '/>
                            <input type="text" placeholder='E-mail'/>
                        </div>
                    </div>
                    <div className="secondBlock">
                        <div className="secondBlockLeftSide">
                            <div className="upper_2">
                                <p className='secondBlockNumber'>2</p>
                                <img className='cervedSecondBlock' src={cervedLIne} alt=""/>
                            </div>
                            <p className='Delivery_method'>Способ доставки</p>
                        </div>
                        <div className="secondBlockRightSide">
                            <form>
                                <div className="radio">
                                    <label>
                                        <input
                                            type="radio"
                                            name="options"
                                            value="option1"
                                            checked={selectedDiliveryMethod === 'option1'}
                                            onChange={handleDiliveryMethod}
                                        />
                                        <span className="checkmark"></span>
                                        Доставка в отделение Новой почты — согласно тарифам НП
                                    </label>

                                    <label>
                                        <input
                                            type="radio"
                                            name="options"
                                            value="option2"
                                            checked={selectedDiliveryMethod === 'option2'}
                                            onChange={handleDiliveryMethod}
                                        />
                                        <span className="checkmark"></span>
                                        Курьерская доставка Новой почты— согласно тарифам НП
                                    </label>

                                    <label>
                                        <input
                                            type="radio"
                                            name="options"
                                            value="option3"
                                            checked={selectedDiliveryMethod === 'option3'}
                                            onChange={handleDiliveryMethod}
                                        />
                                        <span className="checkmark"></span>
                                        Международная доставка — согласно тарифам Укрпочта
                                    </label>

                                    <label>
                                        <input
                                            type="radio"
                                            name="options"
                                            value="option4"
                                            checked={selectedDiliveryMethod === 'option4'}
                                            onChange={handleDiliveryMethod}
                                        />
                                        <span className="checkmark"></span>
                                        Самовывоз с нашего шоурума — бесплатно
                                    </label>

                                    <p className="address">г.Киев, ул. Нижний вал, 37 Ежедневно с 11:00 до 21:00</p>

                                    <input className='input-comment' type="text" placeholder='Комментарий к заказу'/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="thirdBlock">
                        <div className="thirdBlockLeftSide">
                            <div className="upper_3">
                                <p className='thirdBlockNumber'>3</p>
                                <img className='cervedThirdBlock' src={cervedLIne} alt=""/>
                            </div>
                            <p className='payment_method'>Способ оплаты</p>
                        </div>
                        <div className="thirdBlockRightSide">
                            <form>
                                <div className="radio">
                                    <label>
                                        <input
                                            type="radio"
                                            name="options"
                                            value="option1"
                                            checked={selectedPaymentMethod === 'option1'}
                                            onChange={handlePaymentMethod}
                                        />
                                        <span className="checkmark"></span>
                                        Картой Visa / MasterCard
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="options"
                                            value="option2"
                                            checked={selectedPaymentMethod === 'option2'}
                                            onChange={handlePaymentMethod}
                                        />
                                        <span className="checkmark"></span>
                                        Наличкой при получении
                                    </label>
                                </div>
                                <input type="number" placeholder='Номер карты boorivasis'/>

                            </form>
                            <div className="confirmation-checkbox">
                                <input
                                    type="checkbox"
                                    id="confirmation"
                                    name="confirmation"
                                    checked={checked}
                                    onChange={changeCheckBox}
                                />
                                <label htmlFor="confirmation" className="checkmark"></label>
                                <label className='textLabel' htmlFor="confirmation">Я уверена в заказе, со мной <br/>
                                    можно не связываться</label>
                            </div>
                            <button className="confirmOrder">
                                <img src={Confirm} alt="Подтвердить заказ"/>
                            </button>

                        </div>
                    </div>

                </div>
                <div className="rightColumn">
                    <div className="cart-modal-content">
                        <h2 className='titleCart'>Товары в корзине</h2>
                        <div className="cart-items-page">
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
                            <p className='text-OrderSum'>Сумма заказа: </p>
                            <p className="total-price"> {totalPrice} ₴</p>
                        </div>
                        <div className="delivery">
                            <p className='diliverycost'>Стоимость доставки: </p>
                            <p className='free'> Бесплатно </p>
                        </div>
                        <div className="toPay">
                            <p className='toPayText'>К оплате: </p>
                            <p className='toPayPrice'> {totalPrice} ₴ </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CartPage;