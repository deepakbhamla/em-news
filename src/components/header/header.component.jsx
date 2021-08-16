import React from 'react'
import { Navbar, Container } from 'react-bootstrap';
import './header.style.css'

export const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="pt-0" >
                        <img src="https://www.emtropylabs.com/hubfs/raw_assets/public/EmtropyLabs_July2021/images/emtropy-logo.svg" alt="" srcset=""/>
                        <span className='textMuted' style={{fontSize:'12px'}}> news</span>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header