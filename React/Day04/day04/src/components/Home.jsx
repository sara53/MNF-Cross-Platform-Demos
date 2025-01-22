import React from 'react'
import { CustomButton, StyledButton } from '../StyledComponents/StyledButton'

export default function Home() {
    return (
        <div className='bg-light p-5'>
            <h3>Home Component</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem accusamus labore quas maiores exercitationem nisi nemo vitae! Cum animi soluta dolor provident voluptatibus culpa repellat nam quod. Illum, totam!</p>

            <StyledButton onClick={() => console.log( "Btn Clicked" )}>Primary</StyledButton>
            <StyledButton variant="outline">outlined</StyledButton>
            <CustomButton>Custom Button</CustomButton>
        </div>
    )
}
