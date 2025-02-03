import React from 'react'
import { Header } from '../components/Header'
import { SharedLayout } from './SharedLayout'
import { Home, ProductDetails, ProductForm, Products, NotFound, Counter } from '../Pages'
// react router dom
import { BrowserRouter, Route, Routes } from 'react-router-dom'



export function MainLayout() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="products" element={<Products />} />
                    <Route path="products/:id" element={<ProductDetails />} />
                    <Route path="products/:id/edit" element={<ProductForm />} />
                    <Route path="counter" element={<Counter />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>


    )
}
