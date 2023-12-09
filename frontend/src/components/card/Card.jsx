import styles from './Card.module.scss';
import React, {useState, useEffect} from 'react';
import {ReactComponent as Heart} from '../../img/lines/cerved_heart_red.svg'

const Card = (props) => {
    const [isRedHeart, setIsRedHeart] = useState(false);

    const redHeartClick = () => {
        setIsRedHeart(!isRedHeart);
    };

// Функция для изменения размера шрифта
    const adjustFontSize = () => {
        // Получаем элементы карточек
        const cards = document.querySelectorAll(`.${styles.Card}`);

        cards.forEach(card => {
            // Получаем размеры карточки
            const width = card.offsetWidth;
            const height = card.offsetHeight;

            // Получаем элементы текста внутри карточки
            const title = card.querySelector(`.${styles.card_title}`);
            const price = card.querySelector(`.${styles.card_price}`);
            const img = card.querySelector(`.${styles.card_img}`);
            // const heart = card.querySelector(`.${styles.heart_icon}`)
            const heartIconClass = styles.heart_icon.replace(/\+/g, '\\+');
            const heart = card.querySelector(`.${heartIconClass}`);

            // Проверяем размеры и обновляем размер шрифта
            if (width === 360 && height === 530) {
                title.style.fontSize = '16px';
                price.style.fontSize = '24px';
                img.style.width = '350px';
                img.style.height = '434px';
                heart.style.width = '26px';
                heart.style.height = '24px';

            } else if (width === 274 && height === 300) {
                title.style.fontSize = '14px';
                price.style.fontSize = '16px';
                img.style.width = '274px';
                img.style.height = '238px';
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
        // Вся карточка
        <div style={{width: props.width, height: props.height}} className={styles.Card}>
            <a href="#!" className={styles.card_link}></a>
            {/* Картинка в карточке */}
            <img className={styles.card_img} src={props.img} alt="img"/>
            {/* Линия под картинкой */}
            <div className={styles.underline}></div>
            {/* Сердечко в углу */}
            <div className={styles.heart_icon}>
                <Heart
                    className={`${styles.cerved_heart} ${isRedHeart ? styles.redHeart : ''}`}
                    onClick={redHeartClick}
                />
            </div>
            {/* Контейнер для всего описания */}
            <div className={styles.card_body}>
                {/* Контейнер для текста описания */}
                <div className={styles.card_title}>{props.title}</div>
                <div className={styles.card_price}>{props.price} ₴</div>
            </div>
        </div>
    );
}

export default Card;