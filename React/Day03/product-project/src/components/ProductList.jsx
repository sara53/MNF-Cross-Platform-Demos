import React from 'react'
import { Badge, Table } from 'react-bootstrap'
import { MdDeleteForever } from "react-icons/md";

export function ProductList( { products } ) {
    return (
        <div className='container'>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Free Shipping</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map( ( product, index ) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>

                                    {
                                        product.isFreeShipping ?
                                            <Badge bg="success">Free Shipping</Badge> :
                                            <Badge bg="danger">Not Free</Badge>
                                    }

                                </td>
                                <td>
                                    <MdDeleteForever className='fs-1 text-danger' />

                                </td>
                            </tr>
                        )
                    } )}

                </tbody>
            </Table>
        </div>
    )
}
