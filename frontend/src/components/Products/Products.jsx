import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {toggleFavorite} from '../../features/user/userSlice';
import {ReactComponent as Heart} from '../../img/lines/cerved_heart_red.svg';
import PropTypes from 'prop-types';

import "./Products.scss";

const sizes = {
    small: {width: "274px", height: "300px"},
    medium: {width: "320px", height: "400px"},
    large: {width: "360px", height: "530px"},
};


const Products = ({title, style = {}, products = [], amount, size}) => {


    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.user.favorites);
    const categories = useSelector((state) => state.categories.list);
    const [heartsState, setHeartsState] = useState({});

    const productSize = sizes[size] || sizes.large;


    const redHeartClick = (id, event) => {
        event.preventDefault(); // Предотвращаем переход по ссылке
        event.stopPropagation(); // Предотвращаем всплытие события
        dispatch(toggleFavorite(id));
        setHeartsState(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

//sizes Изменено было sizes.large


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
                {products.slice(0, amount).map((product) => {
                    const isFavorite = favorites.includes(product.id);
                    const categoryObj = categories.find(cat => cat.id === product.category.id);
                    const categoryName = categoryObj?.name.toLowerCase().replace(/\s+/g, '_');
                    const linkToProduct = `/${categoryName}/product/${product.id}`;


                    return (
                        <Link
                            to={linkToProduct}
                            key={product.id}
                            className='product'
                            style={{width: productSize.width, height: productSize.height}}>

                            <img src={product.images[0]} alt={title} className='image'/>
                            {/* Линия под картинкой */}
                            <div className='underline'></div>
                            <div className='heart_icon'>
                                <Heart
                                    className={`cerved_heart ${isFavorite ? 'redHeart' : ''}`}
                                    onClick={(e) => redHeartClick(product.id, e)}
                                />
                            </div>
                            <div className='wrapper'>
                                <div className='title'>{product.title}</div>
                                <div className='price'>{product.price} ₴</div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

Products.propTypes = {
    style: PropTypes.object,
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.shape({
            id: PropTypes.string.isRequired,
            subcategoryId: PropTypes.string.isRequired,
        }),
        price: PropTypes.number.isRequired,
    })),
    amount: PropTypes.number.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Products;