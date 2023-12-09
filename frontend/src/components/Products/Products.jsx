import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Heart} from '../../img/lines/cerved_heart_red.svg'

import "./Products.scss";

const sizes = {
    small: {width: "274px", height: "300px"},
    medium: {width: "320px", height: "400px"},
    large: {width: "360px", height: "530px"},
};


const Products = ({title, style = {}, products = [], amount}, size) => {
    const list = products.filter((_, i) => i < amount);

    const [heartsState, setHeartsState] = useState({});

    const redHeartClick = (id) => {
        setHeartsState(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const productSize = sizes[size] || sizes.large;

// Функция для изменения размера шрифта
    const adjustFontSize = () => {
        // Получаем элементы карточек
        const products = document.querySelectorAll(`.${'product'}`);


        products.forEach(product => {
            // Получаем размеры карточки
            const width = product.offsetWidth;
            const height = product.offsetHeight;

            // Получаем элементы текста внутри карточки
            const title = product.querySelector(`.${'title'}`);
            const price = product.querySelector(`.${'price'}`);
            const image = product.querySelector(`.${'image'}`);
            const heartIconClass = 'heart_icon'.replace(/\+/g, '\\+');
            const heart = product.querySelector(`.${heartIconClass}`);

            // Проверяем размеры и обновляем размер шрифта
            if (width === 360 && height === 530) {
                title.style.fontSize = '16px';
                price.style.fontSize = '24px';
                image.style.width = '350px';
                image.style.height = '434px';
                heart.style.width = '26px';
                heart.style.height = '24px';

            } else if (width === 274 && height === 300) {
                title.style.fontSize = '14px';
                price.style.fontSize = '16px';
                image.style.width = '274px';
                image.style.height = '238px';
                heart.style.width = '22px';
                heart.style.height = '20px';
            }
        });
    }

    // Вызываем функцию при монтировании и при изменении размера окна
    useEffect(() => {
        window.addEventListener('resize', adjustFontSize);
        adjustFontSize();

        // Удаляем обработчик события при размонтировании компонента
        return () => {
            window.removeEventListener('resize', adjustFontSize);
        };
    }, []);


    return (
        <section className='products' style={style}>
            <div className='list'>
                {list.map(({id, images, title, category: {name: cat}, price}) => (
                    <Link
                        to={`/products/${id}`}
                        key={id}
                        className='product'
                        style={{width: productSize.width, height: productSize.height}}>

                        <img src={images[0]} alt={title} className='image'/>
                        {/* Линия под картинкой */}
                        <div className='underline'></div>
                        <div className='heart_icon'>
                            <Heart
                                className={`cerved_heart ${heartsState[id] ? 'redHeart' : ''}`}
                                onClick={() => redHeartClick(id)}
                            />
                        </div>
                        <div className='wrapper'>
                            <div className='title'>{title}</div>
                            <div className='price'>{price}₴</div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Products;