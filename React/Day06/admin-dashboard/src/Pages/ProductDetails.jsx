import React, { useEffect, useState } from 'react'
import { MainButton } from '../Custom/MainButton'
import { MdStarRate } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../API/productAPI';
import { useDispatch, useSelector } from 'react-redux';
import { getProductByIdAction } from '../store/productSlice';

export function ProductDetails() {

    // products ...find

    const { product } = useSelector( state => state.productSlice )
    const dispatch = useDispatch();
    const { id } = useParams();


    useEffect( () => {
        dispatch( getProductByIdAction( id ) )
    }, [] )



    return (
        <div className='mt-2 container p-5'>
            <h1 className='text-center text-info'>More Details </h1>
            <div className='border p-5 mt-5 rounded'>
                <p className='lead fs-2'>Product Name : {product?.name}</p>
                <p className='lead fs-3'>Product price : {product?.price} $ </p>
                <p className='lead fs-3'>Product quantity : 10</p>

                <div className='rate'>
                    <MdStarRate className='fs-2 text-warning mx-1' />
                    <MdStarRate className='fs-2 text-warning mx-1' />
                    <MdStarRate className='fs-2 text-warning mx-1' />
                    <MdStarRate className='fs-2 text-warning mx-1' />
                    <MdStarRate className='fs-2 text-warning mx-1' />

                </div>
                <Link to="/products" className='btn btn-dark mt-5'>Back to Products</Link>
            </div>
        </div>
    )
}
