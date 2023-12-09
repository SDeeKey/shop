import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {ROUTES} from "../../utils/routes";

import styles from './Product.scss';

import {addItemToCart} from "../../features/user/userSlice";

const SIZES = [4, 4.5, 5];

const Product = (item) => {
    const {title, price, images, description} = item;

    const dispatch = useDispatch();

    const [currentImage, setCurrentImage] = useState();
    const [currentSize, setCurrentSize] = useState();

    useEffect(() => {
        if (!images.length) return;

        setCurrentImage(images[0]);
    }, [images]);

    const addToCart = () => {
        dispatch(addItemToCart(item));
    };

    return (
        <section className='product'>
            <div className='images'>
                <div
                    className='current'
                    style={{backgroundImage: `url(${currentImage})`}}
                />
                <div className={styles["images-list"]}>
                    {images.map((image, i) => (
                        <div
                            key={i}
                            className='image'
                            style={{backgroundImage: `url(${image})`}}
                            onClick={() => setCurrentImage(image)}
                        />
                    ))}
                </div>
            </div>
            <div className='info'>
                <h1 className='title'>{title}</h1>
                <div className='price'>{price}$</div>
                <div className='color'>
                    <span>Color:</span> Green
                </div>
                <div className='sizes'>
                    <span>Sizes:</span>

                    <div className='list'>
                        {SIZES.map((size) => (
                            <div
                                onClick={() => setCurrentSize(size)}
                                className={`${size} ${
                                    currentSize === size ? 'active' : ""
                                }`}
                                key={size}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>

                <p className='description'>{description}</p>

                <div className='actions'>
                    <button
                        onClick={addToCart}
                        className='add'
                        disabled={!currentSize}
                    >
                        Add to cart
                    </button>
                    <button className='favourite'>Add to favourites</button>
                </div>

                <div className='bottom'>
                    <div className='purchase'>19 people purchased</div>

                    <Link to={ROUTES.HOME}>Return to store</Link>
                </div>
            </div>
        </section>
    );
};

export default Product;