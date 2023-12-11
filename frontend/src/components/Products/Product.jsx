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


const Product = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();

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
                                </div>
                                <img className='sizeTable' src={sizeTable} alt="Таблица размеров"/>

                            </>
                        ) : (
                            <div>Loading product details...</div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
