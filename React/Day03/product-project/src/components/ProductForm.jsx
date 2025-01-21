
import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export function ProductForm( { products, setProducts } ) {

    const [ formValues, setFormValues ] = useState( {
        name: '',
        price: "",
        isFreeShipping: false
    } )

    const formInputsHandler = ( e ) => {
        if ( e.target.name == 'isFreeShipping' ) {
            setFormValues( {
                ...formValues,
                [ e.target.name ]: e.target.checked

            } )
        } else {
            setFormValues( {
                ...formValues,
                [ e.target.name ]: e.target.value

            } )
        }

    }


    const addNewProduct = ( e ) => {
        e.preventDefault();
        setProducts( [ ...products, formValues ] )
        setFormValues( {
            name: '',
            price: "",
            isFreeShipping: false
        } )
    }
    return (
        <div className='container p-5'>
            <h2 className='text-center text-muted'>Product Form</h2>
            <Form className='mt-5' onSubmit={addNewProduct}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>

                    <Form.Control onChange={formInputsHandler} type="text" value={formValues.name} placeholder="Enter Product Name" name="name" />
                    <p>{name}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control onChange={formInputsHandler} value={formValues.price} type="number" placeholder="Enter Product Price" name="price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={formInputsHandler} type="checkbox" checked={formValues.isFreeShipping} label="Free Shipping" name="isFreeShipping" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Add New Product
                </Button>
            </Form>
        </div>
    )
}
