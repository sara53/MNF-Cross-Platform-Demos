import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Product from './Product'

export default function Products() {
    return (
        <div className='bg-dark p-4 text-light '>

            <div className="container">
                <h1 className='text-warning text-center'>Our Products</h1>
                <div className="row">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    )
}
