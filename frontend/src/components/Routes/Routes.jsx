import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import Categories from "./../categories/categories";
import ProductPage from "../Pages/ProductPage/ProductPage";
import CartPage from "../Pages/CartPage/CartPage";
import FavoritesPage from "../Pages/FavoritesPage/FavoritesPage";
import {ROUTES} from "../../utils/routes";
import FiltersPage from "../Pages/FiltersPage/FiltersPage";
import BoorivagirlsPage from "../Pages/BoorivagirlsPage/BoorivagirlsPage";
import ContactPage from "../Pages/CantactPage/ContactPage";
import LoyalPage from "../Pages/Loyal/LoyalPage";
import RefundPage from "../Pages/RefundPage/RefundPage";
import DeliveryPage from "../Pages/DelivelyPage/DeliveryPage";


const AppRoutes = () => (
    <Routes>
        <Route path={ROUTES.HOME} element={<Home/>}/>
        <Route path="/category/:categoryName" element={<FiltersPage/>}/>
        <Route path={ROUTES.PRODUCT} element={<ProductPage/>}/>
        <Route path={ROUTES.CONTACTS} element={<ContactPage/>}/>
        <Route path={ROUTES.FAVORITES} element={<FavoritesPage/>}/>
        <Route path={ROUTES.BOORIVARIGLS} element={<BoorivagirlsPage/>}/>
        <Route path={ROUTES.CART} element={<CartPage/>}/>
        <Route path={ROUTES.LOYALSYSTEM} element={<LoyalPage/>}/>
        <Route path={ROUTES.REFUND} element={<RefundPage/>}/>
        <Route path={ROUTES.DELIVERY} element={<DeliveryPage/>}/>


    </Routes>
);

export default AppRoutes;
