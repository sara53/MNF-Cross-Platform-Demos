import { styled } from 'styled-components'

const primaryBgFun = ( { variant } ) => variant == "outline" ? "#143b47" : "#fff"
const outlineBgBgFun = ( { variant } ) => variant == "outline" ? "#fff" : "#143b47"
const StyledButton = styled.button`
    color:${primaryBgFun};
    outline:0;
    background-color:${outlineBgBgFun};
    margin:20px;
    border:${( { variant } ) => variant == 'outline' ? '1px solid #143b47' : "transparent"};
    padding: 0.5rem 1.5rem;
    border-radius: 3px;
    font-weight: bold;
    transition: 0.5s;
    &:hover{
    background-color: ${primaryBgFun};
    color:${outlineBgBgFun};
    border: 1px solid #143b47;
}

`



const CustomButton = styled( StyledButton )`
background:linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(41,164,228,1) 35%, rgba(0,212,255,1) 100%); ;
`

export { StyledButton, CustomButton }