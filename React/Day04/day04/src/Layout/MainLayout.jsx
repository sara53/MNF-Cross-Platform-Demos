import React from 'react'
import Home from '../components/Home'
import Login from '../components/Login'
import Content from '../components/Content'
import { Header } from '../components/Header'
import Counter from '../components/Counter'
import { CounterProvider } from '../components/Context/CounterProvider'
import ThemeProvider from '../components/Context/ThemeProvider'
import { Posts } from '../components/Posts'
import { User } from '../components/User'

export default function MainLayout() {


    return (

        <>
            <User />
            <Posts />
        </>
    )
}
