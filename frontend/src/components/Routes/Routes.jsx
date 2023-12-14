import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import Categories from "./../categories/categories"; // Предполагается, что у вас есть компонент Categories
import ProductPage from "../Pages/ProductPage"; // Компонент для отображения детальной информации о продукте
import {ROUTES} from "../../utils/routes";
import CartPage from "../Pages/CartPage";

const AppRoutes = () => (
    <Routes>
        <Route path={ROUTES.HOME} element={<Home/>}/>
        <Route path={ROUTES.CATEGORY} element={<Categories/>}/>
        <Route path={ROUTES.PRODUCT} element={<ProductPage/>}/>
        <Route path={ROUTES.CART} element={<CartPage/>}/>

        {/* Добавьте здесь любые дополнительные маршруты, если они вам нужны */}
    </Routes>
);

export default AppRoutes;
