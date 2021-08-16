import React from 'react'
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap';
import './header.style.css'

export const Category = () => {
    return (
        <Container>
                <div className="m-3" style={{borderBottom:'1px solid #e1e1e1'}}>
                 <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                    <Col sm={12} md={4} lg={4} >
                      <Nav variant="pills" className="flex-rows">
                        <Nav.Item>
                          <Nav.Link eventKey="first">
                              <img src="https://www.countryflags.io/in/flat/24.png" alt=''/>    
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">
                              <img src="https://www.countryflags.io/us/flat/24.png" alt=''/>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">
                               <img src="https://www.countryflags.io/de/flat/24.png" alt=''/>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={12}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
        </div>
            </Container>
    )
}

export default Category
