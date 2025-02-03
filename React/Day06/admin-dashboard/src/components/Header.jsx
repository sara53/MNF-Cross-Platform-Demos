import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export function Header() {


    const { count } = useSelector( state => state.counterSlice )
    const { user, isLogin } = useSelector( state => state.userSlice )
    return (

        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">Products</Navbar.Brand>
                <Nav className="ms-auto">
                    <NavLink className={( { isActive } ) => isActive ? "nav-link text-danger " : "nav-link"} to="/">Home</NavLink>
                    <NavLink className={( { isActive } ) => isActive ? "nav-link text-danger " : "nav-link"} to="/products">Products ({count})</NavLink>
                    <NavLink className={( { isActive } ) => isActive ? "nav-link text-danger " : "nav-link"} to="/counter">Counter</NavLink>
                    <NavLink className={( { isActive } ) => isActive ? "nav-link text-danger " : "nav-link"} >{isLogin && user}</NavLink>
                </Nav>
            </Container>
        </Navbar >
    )
}
