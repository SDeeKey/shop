import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import './FavoritesPage.scss';
import Usp from "../Usp/Usp";
import Instagram from "../Instagram/Instagram";
import Products from '../Products/Products';
import cerved from './../../img/lines/curved line.svg'
import EmptyWishlistModal from './../EmptyWishlistModal/EmptyWishlistModal';

const FavoritesPage = () => {
    const favorites = useSelector((state) => state.user.favorites);
    const allProducts = useSelector((state) => state.products.list); // Данные всех продуктов


    // Фильтрация продуктов для получения списка избранных
    const favoriteProducts = allProducts.filter(product => favorites.includes(product.id));

    const [isModalOpen, setIsModalOpen] = useState(favorites.length === 0); // Измените начальное состояние на основе наличия избранных товаров

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Если нет продуктов, нет смысла показывать страницу избранного
    if (!allProducts || allProducts.length === 0) {
        return <div>No products available.</div>;
    }

    return (
        <section className='favorites'>
            {favoriteProducts.length > 0 ? (
                <div className="favoritesProducts">
                    <div className="text">
                        <p className='wishList'>список желаний</p>
                        <div className="secondLine">
                            <p>твой тайный список желаний</p>
                            <img src={cerved} alt=""/>
                        </div>
                    </div>
                    <Products products={favoriteProducts} amount={favoriteProducts.length}/>
                </div>
            ) : (
                isModalOpen && <EmptyWishlistModal onClose={handleCloseModal}/>
            )}
            <div className="usp"><Usp/></div>
            <div className="instagram"><Instagram/></div>
        </section>
    );
};

export default FavoritesPage;
