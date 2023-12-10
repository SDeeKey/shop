import React, {useState, useEffect} from 'react'
import {useDispatch} from "react-redux";

import Header from '../header/header.jsx';
import Footer from "../footer/footer";
import AppRoutes from "../Routes/Routes";
import UserForm from "../User/UserForm";

import {getCategories} from "../../features/categories/categoriesSlice";
import {getProducts} from "../../features/products/productsSlice";


const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getProducts())
        // dispatch(fetchProductDetails())

    }, [dispatch]);


    return (
        <div className="app">
            <Header/>
            <UserForm/>
            <div className="container">
                <AppRoutes/>
            </div>
            <Footer/>
        </div>
    );

}

export default App;
