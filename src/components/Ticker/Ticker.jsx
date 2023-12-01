import React from 'react';
import './Ticker.scss';

const Ticker = () => {
    // Создаем массив из элементов с текстом и отступами
    const items = Array.from({length: 50}, () => "Топовые товары").map((text, index) => (
        <span key={index} className="ticker-text">{text}</span>
    ));

    return (
        <div className="ticker-container">
            {items}
            
        </div>
    );
};

export default Ticker;
