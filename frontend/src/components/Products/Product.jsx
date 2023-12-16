import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {getProducts} from '../../features/products/productsSlice';
import {addItemToCart} from '../../features/user/userSlice';
import modelParams from '../../img/randimg/modelParams.png';
import './Product.scss';
import addToCartImg from '../../img/btn/AddToCart.svg';
import quickOrder from '../../img/btn/QuickOrder.svg';
import sizeTable from '../../img/btn/SizeTable.svg';
import Cat from '../../img/icon/Cat.png';
import Box from '../../img/icon/wing_box.png';
import Hands from '../../img/icon/hands.png';
import Photo from '../../img/randimg/PhotoFromInstagram.png';
import curved_line from "../../img/lines/curved line.svg";
import Products from "./Products";
import Instagram from "../Instagram/Instagram";
import SizeTable from "../SizeTable/SizeTable";
import {ROUTES} from "../../utils/routes";
import Notification from "../notification/notification";

const SIZES = ['XS — S', 'S — M', 'M — L', 'L — XL'];

const Product = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.list);
    const error = useSelector(state => state.products.error);
    const [selectedSize, setSelectedSize] = useState(null);
    const [currentImage, setCurrentImage] = useState();
    const [showModal, setShowModal] = useState(false);
    const list = useSelector(state => state.products.list);
    const [clickedUnavailableSizes, setClickedUnavailableSizes] = useState(new Set());
    const [isDescriptionExpanded, setDescriptionExpanded] = useState(false);
    const [isSizeSelected, setIsSizeSelected] = useState(true);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // Функция для переключения состояния показа текста
    const toggleDescription = () => {
        setDescriptionExpanded(!isDescriptionExpanded);
    };

    const productDetails = products.find(product => product.id === parseInt(productId));

    const handleSizeClick = (size) => {
        if (!isSizeAvailable(size)) {
            setClickedUnavailableSizes(prev => new Set(prev).add(size));
            return; // Не выполняем никаких действий, если размер недоступен
        }
        // Существующая логика для выбора размера
        setSelectedSize(size);
    };

    const isSizeAvailable = (size) => {
        return productDetails && productDetails.sizes.includes(size);
    };

    useEffect(() => {
        setClickedUnavailableSizes(new Set()); // Очищаем выбранные недоступные размеры
        setSelectedSize(null); // Опционально: также можно сбросить выбранный размер
    }, [productId]); // Эффект срабатывает при изменении productId


    useEffect(() => {
        if (!productDetails) {
            dispatch(getProducts());
        } else {
            // Установка изображения продукта для отображения
            setCurrentImage(productDetails.images[0]);
        }
    }, [dispatch, productId, productDetails]);

    const handleSelectSize = (size) => {
        setSelectedSize(size);
    };

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleAddToCart = () => {
        if (!selectedSize) {
            setIsPopupVisible(true); // Показываем всплывающее окно
            return;
        }
        if (selectedSize && productDetails) {
            // Создаем объект с нужными свойствами для корзины
            const itemWithImage = {
                ...productDetails,
                size: selectedSize,
                image: productDetails.images[0] // URL изображения как строка
            };
            // Диспатчим экшн добавления в корзину с этим объектом
            dispatch(addItemToCart(itemWithImage));
        }
    };


    if (error) return <div>Error: {error.message}</div>;

    return (
        <section className="product">
            <div className="contentProductPage">
                <div className="upperBlock">
                    <div className="imagesLeftBlock">
                        <img
                            className='frontImage'
                            src={productDetails.images[0]}
                            alt={productDetails.title}
                        />
                    </div>
                    <div className="infoRightBlock">
                        {productDetails ? (
                            <>
                                <div className="rightMainInfo">
                                    <h1 className='title'>{productDetails.title}</h1>
                                    <h1 className='price'>{productDetails.price} ₴</h1>
                                    <div className="sizes">
                                        Выбрать размер:
                                        <ul>
                                            {SIZES.map((size) => (
                                                <li
                                                    key={size}
                                                    onClick={() => handleSizeClick(size)}
                                                    className={`
                                                        ${selectedSize === size ? 'active' : ''}
                                                        ${!isSizeAvailable(size) ? 'unavailable-size' : ''}
                                                        ${clickedUnavailableSizes.has(size) ? 'clicked-unavailable' : ''}
                                                        `}
                                                >
                                                    {size}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {isPopupVisible && (
                                        <Notification
                                            message="Пожалуйста, выберите размер перед добавлением в корзину."
                                            onClose={() => setIsPopupVisible(false)}
                                        />
                                    )}
                                    <button className='add' onClick={handleAddToCart}>
                                        <img
                                            className='addToCart'
                                            src={addToCartImg}
                                            alt="В корзину"
                                        />
                                    </button>
                                    <button className='quick' onClick={handleAddToCart}>
                                        <Link to={ROUTES.CART}>
                                            <img className='quickOrder' src={quickOrder} alt="Быстрый заказ"/>
                                        </Link>
                                    </button>

                                    <div className='description'>
                                        <p>{isDescriptionExpanded ? productDetails.description : productDetails.description.slice(0, 200) + '...'}</p>
                                        <button onClick={toggleDescription} className="read-more-btn">
                                            {isDescriptionExpanded ? 'Скрыть' : 'Читать дальше'}
                                        </button>
                                    </div>
                                    <div className="line"></div>
                                </div>
                                <div className="subInfo">
                                    <div className="modelParams">
                                        Параметры модели:
                                        <p>(На модели XS — S-ка)</p>
                                        <img src={modelParams} alt="Параметры модели"/>
                                    </div>
                                    <div className="compound">
                                        Состав:
                                        <ul>

                                            <li>50% вискоза,</li>
                                            <li>50% полиэстер</li>

                                        </ul>
                                    </div>
                                    <button className="blockSizetable" onClick={handleShow}>
                                        <img
                                            className='sizeTable'
                                            src={sizeTable}
                                            alt="Таблица размеров"
                                        />
                                    </button>
                                    {showModal && (
                                        <div className="modal" onClick={handleClose}>
                                            <div className="modal-content" onClick={e => e.stopPropagation()}>
                                                <span className="close" onClick={handleClose}>&times;</span>
                                                <SizeTable/>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <div>Loading product details...</div>
                        )}
                    </div>
                </div>
                <div className="lowerBlock">
                    <div className="leftLowerBlock">
                        <div className="firstLineLeftLowerBlock">
                            <img src={Cat} alt="Cat"/>
                            <ul>
                                <li>Отправляем день в день</li>
                                <li className='line_2_FirstLineLeftLowerBlock'>При заказе до 1800</li>
                            </ul>
                        </div>
                        <div className="secondLineLeftLowerBlock">
                            <img src={Box} alt="Box"/>
                            <ul>
                                <li>Легкий возврат/обмен</li>
                                <li className='line_2_SecondLineLeftLowerBlock'>В течении 14 дней</li>
                            </ul>
                        </div>
                        <div className="thirdLineLeftLowerBlock">
                            <img src={Hands} alt="Hands"/>

                            <ul>
                                <li>Отправляем наложкой</li>
                                <li className='line_2_ThirdLineLeftLowerBlock'>+ 2% от суммы</li>
                            </ul>
                        </div>
                    </div>
                    <div className="rightLowerBlock">
                        <p>Фото из instagram</p>
                        <img src={Photo} alt="Photo from instagram"/>
                    </div>
                </div>
                <div className="mightLike">
                    <div className="titleBlock">
                        <p className='first_novelties'>Могут понравиться</p>
                        <div className="underTitle">
                            <p className='second_novelties'>Тебе могут понравиться</p>
                            <img className='curved_line' src={curved_line} alt='curved line'></img>
                        </div>
                    </div>
                    {/* Контейнер, который вмещет все карточки */}
                    <div className='novelties_card'>
                        {/* Конкретные карточки */}
                        <Products size="large" products={list} amount={4}/>
                    </div>
                </div>
                <div className="instagram">
                    <Instagram/>
                </div>
            </div>
        </section>
    );
};

export default Product;

