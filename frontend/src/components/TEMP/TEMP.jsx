import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getProducts, filterProducts, sortProducts} from '../../features/products/productsSlice';
import Products from '../Products/Products';
import './FiltersPage.scss';
import Instagram from "../Instagram/Instagram";

const FiltersPage = () => {
    const {categoryName} = useParams();
    const dispatch = useDispatch();
    const [priceFilter, setPriceFilter] = useState(''); // состояние для фильтра цены
    const [sizeFilter, setSizeFilter] = useState([]); // состояние для фильтра размеров
    const filteredProducts = useSelector((state) => state.products.filtered);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    useEffect(() => {
        // Обновление фильтров
        dispatch(filterProducts({price: priceFilter, size: sizeFilter, category: categoryName}));
    }, [dispatch, priceFilter, sizeFilter, categoryName]);

    // ... Обработчики для изменения фильтров ...

    // Функция для рендеринга фильтров
    const renderFilters = () => {
        // ... Рендеринг фильтров ...
    };

    return (
        <section className="filters-page">
            {renderFilters()}
            <div className="products-section">
                <Products products={filteredProducts} amount={filteredProducts.length}/>
                <Instagram/>
            </div>
        </section>
    );
};

export default FiltersPage;






