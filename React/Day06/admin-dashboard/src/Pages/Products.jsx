
// custom imports
import { useEffect, useState } from 'react';
import { MainButton } from '../Custom/MainButton'
// react icons
import { Table } from 'react-bootstrap'
import { FaEdit } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
// react router dom
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux'
import { getAllProductAction } from '../store/productSlice';

export function Products() {

    const dispatch = useDispatch();

    const { products, errors, isLoading } = useSelector( state => state.productSlice )

    useEffect( () => {
        dispatch( getAllProductAction() )

    }, [] )


    const deleteHandler = async ( productId ) => {
        // dispatch action delete product
    }

    return (
        <div className='container mt-5 p-5'>
            <h1 className='text-center text-muted mb-5'>Our Products</h1>
            <div className="mb-5 d-flex justify-content-between align-items-center">
                <Link to="0/edit">
                    <MainButton>Add New Button</MainButton>
                </Link>
                <input type="text" className='form-control w-auto' placeholder='Search ...' />
            </div>

            <Table bordered hover className='text-center' >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th> Name</th>
                        <th> price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading && <div className='alert alert-info'><h1> Loading ....</h1></div>}
                    {!isLoading && products.map( ( product ) =>
                    ( <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price} $</td>
                        <td>
                            <Link to={`${product.id}/edit`}>
                                <FaEdit className='fs-1 text-info mx-2' />
                            </Link>
                            <Link to={`${product.id}`}>
                                <IoEye className='fs-1 text-warning mx-2' />

                            </Link>
                            <MdDelete onClick={() => deleteHandler( product.id )} className='fs-1 text-danger mx-2' />
                        </td>
                    </tr> )
                    )}

                </tbody>
            </Table>
        </div>
    )
}
