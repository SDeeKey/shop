import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import Categories from "./../categories/categories";
import ProductPage from "../Pages/ProductPage";
import CartPage from "../Pages/CartPage";
import FavoritesPage from "../Pages/FavoritesPage";
import {ROUTES} from "../../utils/routes";
import FiltersPage from "../Pages/FiltersPage";
import BoorivagirlsPage from "../Pages/BoorivagirlsPage";


const AppRoutes = () => (
    <Routes>
        <Route path={ROUTES.HOME} element={<Home/>}/>
        <Route path="/category/:categoryName" element={<FiltersPage/>}/>
        <Route path={ROUTES.PRODUCT} element={<ProductPage/>}/>
        <Route path={ROUTES.CART} element={<CartPage/>}/>
        <Route path={ROUTES.FAVORITES} element={<FavoritesPage/>}/>
        <Route path={ROUTES.BOORIVARIGLS} element={<BoorivagirlsPage/>}/>
    </Routes>
);

export default AppRoutes;
