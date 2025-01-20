import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function Movie( { movie } ) {
    return (
        <div className='col-sm-6 col-md-3 '>
            <Card.Img variant="top" src={movie.imgSrc} />
            <div style={{ backgroundColor: "#fff" }} className='text-dark p-4 rounded'>
                <Card.Title>{movie.name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="success" color='dark'>Buy Now</Button>
            </div>
        </div>
    )
}
