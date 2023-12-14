import React, {useState} from 'react';
import cervedLIne from './../../img/lines/curved line_pink.svg'
import './CartPage.scss'

const CartPage = () => {
    // Состояние для отслеживания выбранной радиокнопки
    const [selectedDiliveryMethod, setSelectedDiliveryMethod] = useState('option4');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('option2');
    const [checked, setChecked] = useState(true);

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

    return (
        <section className='cartPage'>
            <div className='contentCartPage'>
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
                        <input type="number" placeholder='+38 (___) ___-__-__ '/>
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
                                    Международная доставка— согласно тарифам Укрпочта
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
                        <p className='thirdBlockNumber'>3</p>
                        <img src={cervedLIne} alt=""/>
                        <p>Способ оплаты</p>
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
                                    Каротой Visa / MasterCard
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="options"
                                        value="option2"
                                        checked={selectedPaymentMethod === 'option2'}
                                        onChange={handlePaymentMethod}
                                    />
                                    Наличкой при получении
                                </label>
                                <input type="number" placeholder='Номер карты  boorivasis'/>
                                <input type="checkbox" checked={checked} onChange={changeCheckBox}/>

                            </div>
                        </form>
                    </div>
                </div>
                <div className="cartModalBlock">

                </div>
            </div>
        </section>
    );
}

export default CartPage;