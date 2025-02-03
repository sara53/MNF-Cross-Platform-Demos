import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { MainButton } from '../Custom/MainButton'
import { addNewProduct, getProductById, updateProduct } from '../API/productAPI'
import { useNavigate, useParams } from 'react-router-dom'
export function ProductForm() {

    const { id } = useParams();

    const navigate = useNavigate();
    const [ productForm, setProductForm ] = useState( {} )


    useEffect( () => {
        if ( id != 0 ) {
            const getProduct = async () => {
                const response = await getProductById( id )
                setProductForm( response.data )
            }
            getProduct()
        }
    }, [] )
    const inputHandler = ( e ) => {
        setProductForm( {
            ...productForm,
            [ e.target.name ]: e.target.value
        } )
    }

    const operationHandler = async ( e ) => {
        e.preventDefault()
        if ( id == 0 ) {
            await addNewProduct( productForm )
            navigate( "/products" )
        } else {
            await updateProduct( id, productForm );
            navigate( "/products" )

        }

    }
    return (
        <div className='container mt-5'>
            <Form onSubmit={operationHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product Name" onChange={inputHandler} name="name" value={productForm.name} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter Product Price" onChange={inputHandler} name="price" value={productForm.price} />
                </Form.Group>

                <MainButton type="submit">
                    {id == 0 ? "Add New Product " : "Edit Product"}
                </MainButton>
            </Form>
        </div>
    )
}
