import React from 'react'
import { CounterApp } from '../components/functionComponents/CounterApp'
import { CounterAppWithObject } from '../components/functionComponents/CounterAppWithObject'
import Login from '../components/functionComponents/Login'
import MoviesList from '../components/functionComponents/MoviesList'

import imgSrc1 from '../assets/moviesImgs/1.jpg'
import imgSrc2 from '../assets/moviesImgs/2.jpg'
import imgSrc3 from '../assets/moviesImgs/3.jpg'
export function MainLayout() {
    let moviesList = [
        {
            id: 1,
            name: "Over The Moon",
            category: 'Action',
            author: "Ahmed Ali",
            imgSrc: imgSrc1,
            rate: 4
        },
        {
            id: 2,
            name: "Journey to the Earth",
            category: 'Action',
            author: "Ahmed Alaa",
            imgSrc: imgSrc2,
            rate: 4
        },
        {
            id: 3,
            name: "interseteller",
            category: 'Action',
            author: "Mona Ali",
            imgSrc: imgSrc3,
            rate: 4
        },
    ]
    return (
        <main>
            <MoviesList movies={moviesList} />
            {/* <Login /> */}
            {/* <CounterApp /> */}
            {/* <CounterAppWithObject /> */}

        </main>
    )
}
