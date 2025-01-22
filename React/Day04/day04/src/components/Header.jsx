import React, { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { CounterContext } from './Context/CounterContext'
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from 'styled-components';
import { IoMdSunny } from "react-icons/io";


export function Header() {

    const { productCount } = useContext( CounterContext )
    const { theme, toggleTheme } = useContext( ThemeContext )

    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Count ({productCount})</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    {
                        theme == 'dark' ?
                            <FaMoon onClick={toggleTheme} style={{ margin: '7px', cursor: "pointer" }} />
                            : <IoMdSunny onClick={toggleTheme} style={{ margin: '7px', cursor: "pointer" }} />
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}
