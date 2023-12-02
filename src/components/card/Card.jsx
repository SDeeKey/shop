import styles from './Card.module.scss';
import React, {useState} from 'react';
import {ReactComponent as Heart} from './../../img/lines/cerved_heart_red.svg'

const Card = (props) => {
    const [isRedHeart, setIsRedHeart] = useState(false);

    const redHeartClick = () => {
        setIsRedHeart(!isRedHeart);
    };
    return (
        // Вся карточка
        <div className={styles.Card}>
            <a href="#!" className={styles.card_link}></a>
            {/* Картинка в карточке */}
            {/*<div className="img">*/}
                <img className={styles.card_img} src={props.img} alt="img"/>
            {/*</div>*/}
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
                <div className={styles.card_title}>
                    {props.title}
                </div>
                <div className={styles.card_price}>
                    {props.price} ₴
                </div>
            </div>
        </div>
    );
}

export default Card;