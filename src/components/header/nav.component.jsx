import React from 'react'
import {Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

var item_list = ['in', 'us', 'de']

export const NavList = () => {
    return (
        <div className='mt-2'>
           <Container>
              <Row>
                {
                  item_list.map(i => (
                    <Col style={{backgroundColor:'#eee', padding:'10px',}} key={i}>
                        <Link to={`/${i}`}>
                           <img src={`https://www.countryflags.io/${i}/flat/24.png`} alt=''/>
                        </Link>
                    </Col>
                  ))
                }
              </Row>
            </Container> 
        </div>
    )
}

export default NavList
