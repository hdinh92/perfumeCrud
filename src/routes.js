import React from 'react';
import NotFound from './pages/NotFound';
import ProductActionPage from './pages/ProductActionPage';
import ProductListPage from './pages/ProductListPage';
import Login from './pages/Login';
import HomePage from './pages/HomePage';

const routes = [
    {
        path : '/',
        exact : true,
        main : ()=><HomePage/>
    },
    {
        path : '/product-list',
        exact : false,
        main :() => <ProductListPage />
    },
    {
        path : '/product/add',
        exact : false,
        main : ({history}) => <ProductActionPage history = {history}/>
    },
    {
        path : '/login',
        exact : false,
        main :({history}) => <Login history = {history} />
    },
    {
        path : '/product/:id/edit',
        exact : false,
        main : ({history,match}) => <ProductActionPage match={match} history = {history}/>
    },
    {
        path : '',
        exact : false,
        main :() => <NotFound/>
    }
    
]
export default routes

