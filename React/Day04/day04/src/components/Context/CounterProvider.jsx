import React, { useState } from 'react'
import { CounterContext } from './CounterContext';

export function CounterProvider( props ) {
    const [ productCount, setProductCount ] = useState( 0 );



    const addProductToCart = () => {
        setProductCount( productCount + 1 )
    }
    return (
        <CounterContext.Provider value={{ productCount, addProductToCart }}>
            {props.children}
        </CounterContext.Provider>
    )
}

// 1-x =  createContext
// 2- x.provider  


