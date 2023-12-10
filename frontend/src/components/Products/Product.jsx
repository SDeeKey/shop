// В файле Product.jsx

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {fetchProductDetails} from './../../features/products/productsSlice';

const Product = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();


    // Получаем информацию о продукте из Redux store
    const productDetails = useSelector(state =>
        state.products.details[productId]
    );

    useEffect(() => {
        if (!productDetails) {
            dispatch(fetchProductDetails(productId));
        }
    }, [productId, productDetails, dispatch]);

    if (!productDetails) {
        return <div>Loading...</div>;
    }
    

    return (
        <section className="product">
            <div className="contentProductPage">
                <h1>{productDetails.title}</h1>
                <img
                    className='frontImage'
                    src={productDetails.images[0]}
                    alt={productDetails.title}
                    style={{width: '100%', height: 'auto'}} // Прямая установка стилей для изображения
                />
                <p>{productDetails.description}</p>
            </div>
        </section>
    );
};

export default Product;
