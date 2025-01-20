import React from 'react'
import { CounterApp } from '../components/functionComponents/CounterApp'
import { CounterAppWithObject } from '../components/functionComponents/CounterAppWithObject'
import Login from '../components/functionComponents/Login'

export function MainLayout() {
    return (
        <main>
            <Login />
            {/* <CounterApp /> */}
            {/* <CounterAppWithObject /> */}

        </main>
    )
}
