import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {filterProducts} from '../../features/products/productsSlice';
import './FilterSideBar.scss'

const FilterSidebar = () => {
    const dispatch = useDispatch();
    const [selectedPrice, setSelectedPrice] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    // Дополнительные состояния для других фильтров по мере необходимости

    const handlePriceChange = (e) => {
        setSelectedPrice(e.target.value);
        // Добавьте логику фильтрации или сортировки здесь, если это необходимо
        dispatch(filterProducts({price: e.target.value}));
    };

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
        // Добавьте логику фильтрации или сортировки здесь, если это необходимо
    };

    return (
        <aside className="filters-sidebar">
            <div className="filter-section">
                <h2>КАТЕГОРИИ:</h2>
                {/* Добавьте чекбоксы или другие элементы для фильтрации по категории */}
            </div>

            <div className="filter-section">
                <h2>ЦЕНЫ:</h2>
                <label>
                    <input
                        type="radio"
                        name="price"
                        value="до 500"
                        checked={selectedPrice === 'до 500'}
                        onChange={handlePriceChange}
                    />
                    до 500
                </label>
                <label>
                    <input
                        type="radio"
                        name="price"
                        value="500 — 1000"
                        checked={selectedPrice === '500 — 1000'}
                        onChange={handlePriceChange}
                    />
                    500 — 1000
                </label>
                <label>
                    <input
                        type="radio"
                        name="price"
                        value="1000 — 1500"
                        checked={selectedPrice === '1000 — 1500'}
                        onChange={handlePriceChange}
                    />
                    1000 — 1500
                </label>
                <label>
                    <input
                        type="radio"
                        name="price"
                        value="от 1500"
                        checked={selectedPrice === 'от 1500'}
                        onChange={handlePriceChange}
                    />
                    от 1500
                </label>
            </div>

            <div className="filter-section">
                <h2>РАЗМЕР:</h2>
                <label>
                    <input
                        type="radio"
                        name="size"
                        value="XS — S"
                        checked={selectedSize === 'XS — S'}
                        onChange={handleSizeChange}
                    />
                    XS — S
                </label>
                <label>
                    <input
                        type="radio"
                        name="size"
                        value="S — M"
                        checked={selectedSize === 'S — M'}
                        onChange={handleSizeChange}
                    />
                    S — M
                </label>
                {/* Добавьте дополнительные радиокнопки для других размеров */}
            </div>

            {/* Добавьте дополнительные фильтры по мере необходимости */}
        </aside>
    );
};

export default FilterSidebar;
