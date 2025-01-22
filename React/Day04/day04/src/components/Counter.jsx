import React, { useContext, useState } from 'react'
import { StyledButton } from '../StyledComponents/StyledButton'
import Offers from './Offers';
import { CounterContext } from './Context/CounterContext';
import { ThemeContext } from 'styled-components';

export default function Counter() {

    const { productCount, addProductToCart } = useContext( CounterContext )
    const { theme } = useContext( ThemeContext )

    return (
        <div className={`p-5 mt-5 ${theme == 'dark' ? 'bg-dark text-light' : ''}`}>
            <div className="container">
                <div className="row">
                    <div className='col-sm-6 '>
                        <h3 className='mb-4'>Product Details </h3>
                        <p className='lead fs-2'>Product Name : <span className='text-success fw-bold'>Book</span></p>
                        <p className='lead fs-2'>Product Price : <span className='text-success fw-bold'>200$</span></p>
                        <p className='mt-3 text-muted fs-5 lead'>Number of Products in Your Cart : {productCount} </p>

                        <StyledButton onClick={addProductToCart}>Add To Cart</StyledButton>
                    </div>
                    <Offers />
                </div>
            </div>
        </div>
    )
}
