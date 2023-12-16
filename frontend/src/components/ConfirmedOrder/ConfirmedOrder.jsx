import React from 'react';
import line_pink from './../../img/lines/curved line_pink.svg'
import toHome from './../../img/btn/toHome.svg'

import './ConfirmedOrder.scss';

const ConfirmedOrder = ({isConfirmationVisible, onToggleConfirmation}) => {
    if (!isConfirmationVisible) return null;

    return (
        <div className="order-confirmation-overlay">
            <div className="order-confirmation-content">
                <div className="confirmation-wrapper">
                    <button className="close-confirmation" onClick={onToggleConfirmation}>
                        &times;
                    </button>
                    <div className="upperLine">
                        <h2>СПАСИБО</h2>
                        <img className='line_pink' src={line_pink} alt="розовая кривуля"/>
                    </div>
                    <p className="order-status">ВАШ ЗАКАЗ БЫЛ ПРИНЯТ</p>

                    <div className="order-id">НОМЕР ЗАКАЗА <span>555</span></div>
                    <p className="order-message">
                        Мы обожаем встречать booriva на улице. Так как всех не встретишь, отмечай нас в соц.сетях и мы
                        внутри взорвемся и закричим УРА!
                        Ставь тэг <span>#boorivagirls</span> чтобы быть в нашей тусовке.
                    </p>
                    <button className="action-button" onClick={onToggleConfirmation}>
                        <img src={toHome} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmedOrder;
