import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../../features/categories/categoriesSlice';

import './FilterSideBar.scss'
import {filterByCategory, filterByPrice, filterBySize, setActiveCategory} from "../../features/products/productsSlice";

const FilterSideBar = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.list);
    const isLoading = useSelector(state => state.categories.isLoading);
    const activeCategory = useSelector(state => state.products.activeCategory);

    useEffect(() => {
        // Если есть активная категория, вызываем filterByCategory
        if (activeCategory) {
            dispatch(filterByCategory({category: activeCategory}));
        }
    }, [dispatch, activeCategory]);


    useEffect(() => {
        if (!categories.length) {
            dispatch(getCategories());
        }
    }, [dispatch, categories.length]);

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        // Диспатчим новое значение выбранной категории
        dispatch(setActiveCategory(category));
        // И обновляем отфильтрованные продукты
        dispatch(filterByCategory({category}));
    };

    const handlePriceChange = (priceRange) => {
        dispatch(filterByPrice({price: priceRange}));
    };

    const handleSizeChange = (e) => {
        const size = e.target.value;
        console.log(`Selected size: ${size}`);
        dispatch(filterBySize({size}));
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="filter-sidebar">
            <h3>КАТЕГОРИИ:</h3>
            <div className="category-section">
                {categories.map(category => (
                    <label key={category.id} className="category-item">
                        <input
                            type="radio"
                            name="category"
                            value={category.id}
                            onChange={handleCategoryChange}
                            checked={activeCategory === category.id}
                        />
                        <span className="checkmark"></span>
                        {category.name}
                    </label>
                ))}
            </div>

            <h3>ЦЕНЫ:</h3>
            <div className="price-section">
                <label className="category-item">
                    <input type="radio" name="price" onChange={() => handlePriceChange('all')}/>
                    <span className="checkmark"></span>
                    Все цены
                </label>
                <label className="category-item">
                    <input type="radio" name="price" onChange={() => handlePriceChange('0-500')}/>
                    <span className="checkmark"></span>
                    до 500
                </label>
                <label className="category-item">
                    <input type="radio" name="price" onChange={() => handlePriceChange('500-1000')}/>
                    <span className="checkmark"></span>
                    500 — 1000
                </label>
                <label className="category-item">
                    <input type="radio" name="price" onChange={() => handlePriceChange('1000-1500')}/>
                    <span className="checkmark"></span>
                    1000 — 1500
                </label>
                <label className="category-item">
                    <input type="radio" name="price" onChange={() => handlePriceChange('1500+')}/>
                    <span className="checkmark"></span>
                    от 1500
                </label>
            </div>

            <h3>РАЗМЕР:</h3>
            <div className="size-section">
                <label className="category-item">
                    <input type="radio" name="size" value="XS — S" onChange={handleSizeChange}/>
                    <span className="checkmark"></span>
                    XS — S
                </label>
                <label className="category-item">
                    <input type="radio" name="size" value="S — M" onChange={handleSizeChange}/>
                    <span className="checkmark"></span>
                    S — M
                </label>
                <label className="category-item">
                    <input type="radio" name="size" value="M — L" onChange={handleSizeChange}/>
                    <span className="checkmark"></span>
                    M — L
                </label>
                <label className="category-item">
                    <input type="radio" name="size" value="L — XL" onChange={handleSizeChange}/>
                    <span className="checkmark"></span>
                    L — XL
                </label>
            </div>
        </div>
    );

};

export default FilterSideBar;
