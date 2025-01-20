import React, { useState } from 'react'
import UserProfile from './UserProfile'

export default function Login() {
    const [ show, setShow ] = useState( false )
    const loginHandler = () => {
        setShow( true )
    }
    const logout = () => {
        setShow( false )
    }
    return (
        <div className='container mt-5 text-center'>
            {!show && <button onClick={loginHandler} className='btn btn-success'>Login</button>}

            {show && <UserProfile logout={logout} />}
        </div>

    )
}
