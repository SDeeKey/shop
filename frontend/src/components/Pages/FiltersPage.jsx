import React from 'react';
import {useSelector} from 'react-redux';
import FilterSideBar from "../FilterSideBar/FilterSideBar";
import Products from '../Products/Products';
import './FiltersPage.scss'
import Instagram from "../Instagram/Instagram";
import filterBanner from './../../img/randimg/filterBanner.svg'

const FiltersPage = () => {
    // Получаем отфильтрованный список товаров из Redux-хранилища
    const filteredProducts = useSelector(state => state.products.filtered);

    // Можете задать количество отображаемых продуктов и размер карточки товара
    const amountToShow = 10; // Примерное значение, измените по необходимости
    const size = 'large';

    return (
        <div className='filters'>

            <div className="contentFilters">

                <div className="sideBar">
                    <FilterSideBar/>
                </div>
                <div className="otherContent">
                    <img src={filterBanner} alt="Баннер"/>
                    <div className="list">
                        <Products
                            products={filteredProducts}
                            amount={amountToShow}
                            size={size}
                        />
                    </div>

                </div>
            </div>
            <div className="Instagram">
                <Instagram/>
            </div>
        </div>
    );
}

export default FiltersPage;
