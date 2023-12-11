import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getProducts} from './../../features/products/productsSlice';
import modelParams from './../../img/randimg/modelParams.png'
import './Product.scss'
import {addItemToCart} from "../../features/user/userSlice";
import addToCart from './../../img/btn/AddToCart.svg'
import quickOrder from './../../img/btn/QuickOrder.svg'
import sizeTable from './../../img/btn/SizeTable.svg'
import Cat from '../../img/icon/Cat.png'
import Box from '../../img/icon/wing_box.png'
import Hands from '../../img/icon/hands.png'
import Photo from './../../img/randimg/PhotoFromInstagram.png'
import curved_line from "../../img/lines/curved line.svg";
import Products from "./Products";
import Instagram from "../Instagram/Instagram";


const Product = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const {list} = useSelector(({products}) => products)


    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const productDetails = useSelector(state =>
        state.products.list.find(product => product.id === parseInt(productId))
    );

    const error = useSelector(state => state.products.error);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

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
                                            <li>XS — S</li>
                                            <li> S — M</li>
                                            <li> M — L</li>
                                            <li> L — XL</li>

                                        </ul>
                                    </div>
                                    <img className='addToCart' src={addToCart} alt="В корзину"/>
                                    <img className='quickOrder' src={quickOrder} alt="Быстрый заказ"/>

                                    <div className='description'>
                                        <p>{productDetails.description}</p>
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
                                    <div className="blockSizetable">
                                        <img className='sizeTable' src={sizeTable} alt="Таблица размеров"/>
                                    </div>
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
