import React, { useState } from 'react'
import { ProductForm } from '../components/ProductForm'
import { ProductList } from '../components/ProductList'

export function Home() {


    const [ products, setProducts ] = useState( [] )



    return (
        <>

            <ProductForm products={products} setProducts={setProducts} />
            <ProductList products={products} />
        </>
    )
}
