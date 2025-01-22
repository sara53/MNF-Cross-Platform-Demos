import React from 'react'
import { StyledButton } from '../StyledComponents/StyledButton'

export default function Login() {

    /**
     * 
     * background: #143b47;
        margin: 1rem;
        color: #fff;
        border: transparent;
        padding: 0.5rem 3rem;
        border-radius: 3px;
     */
    return (
        <div className='p-5 text-light'>
            <div className="container">
                <h2 className='text-muted text-center mb-4'>Login </h2>
                <input type="text" className='form-control' placeholder='Enter Your Name' />

                <StyledButton >Show More</StyledButton>
            </div>
        </div>
    )
}
