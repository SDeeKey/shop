// import React, {useState, useEffect} from 'react';
// import {useParams} from 'react-router-dom';
// import {useSelector, useDispatch} from 'react-redux';
// import {getProducts, filterProducts, sortProducts} from '../../features/products/productsSlice';
// import Products from '../Products/Products';
// import './FiltersPage.scss';
// import Instagram from "../Instagram/Instagram";
// import FilterSidebar from "../FilterSideBar/FilterSideBar";
// import {getCategories} from "../../features/categories/categoriesSlice"; // Убедитесь, что путь правильный
//
// const FiltersPage = () => {
//     const {categoryName} = useParams();
//     const dispatch = useDispatch();
//     const [priceFilter, setPriceFilter] = useState('');
//     const [sizeFilter, setSizeFilter] = useState([]);
//     const products = useSelector((state) => state.products.list);
//     const categories = useSelector((state) => state.categories.list);
//     const filteredProducts = useSelector((state) => state.products.filtered);
//
//     dispatch(filterProducts({price: 1000, size: ['M', 'L'], category: 'new'}));
//
//
//     useEffect(() => {
//         dispatch(getProducts());
//         // Если getProducts изменяет значение, которое используется как зависимость ниже,
//         // это может вызвать бесконечный цикл.
//     }, [dispatch]);
//
//     useEffect(() => {
//         dispatch(filterProducts({price: priceFilter, size: sizeFilter, category: categoryName}));
//         // Убедитесь, что priceFilter, sizeFilter и categoryName стабильны
//         // и не изменяются на каждый рендер, иначе это вызовет бесконечный цикл.
//     }, [dispatch, priceFilter, sizeFilter, categoryName]);
//
// // Добавьте временный вывод в консоль для отладки
//     console.log('Отфильтрованные продукты:', filteredProducts);
//
//     const isLoading = useSelector((state) => state.products.isLoading);
//
//     if (isLoading) {
//         return <div>Loading...</div>;
//     }
//
//     return (
//         <div className="filters-page-container">
//             <FilterSidebar/>
//             <section className="filters-page">
//                 {filteredProducts.length > 0 ? (
//                     <div className="products-section">
//                         <Products products={filteredProducts} amount={filteredProducts.length}/>
//                     </div>
//                 ) : (
//                     <p>Товары не найдены или произошла ошибка загрузки.</p>
//                 )}
//                 <Instagram/>
//             </section>
//         </div>
//     );
// };
//
// export default FiltersPage;

import React, {Component} from 'react';

class FiltersPage extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default FiltersPage;