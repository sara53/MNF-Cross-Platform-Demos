import React, { useContext } from 'react'
import { CustomButton } from '../StyledComponents/StyledButton'
import { CounterContext } from './Context/CounterContext'
import { ThemeContext } from 'styled-components'

export default function Offers() {
    const { productCount } = useContext( CounterContext )
    const { theme } = useContext( ThemeContext )
    return (
        <div className={`border rounded col-sm-6 ${theme == 'dark' ? 'text-light' : 'text-dark'} p-4`}>
            <p className='lead fw-bold'> Your Product is Cart : <span className='text-danger'>{productCount}</span></p>
            <CustomButton>Get Your Offer Now !</CustomButton>
        </div>

    )
}
