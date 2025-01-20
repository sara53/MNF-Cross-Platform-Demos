import React from 'react'
import { Button, Card } from 'react-bootstrap'

import imgSrc1 from '../../assets/moviesImgs/1.jpg'
import Movie from './Movie'

export default function MoviesList( { movies } ) {
    const moviesList = movies.map( ( movie, index ) => <Movie movie={movie} key={movie.id} /> )
    return (
        <div className='bg-dark p-5 text-light'>
            <div className="container">
                <h2 className='text-warning'>Movies List</h2>
                <div className="row">

                    {moviesList}

                </div>
            </div>

        </div>
    )
}
