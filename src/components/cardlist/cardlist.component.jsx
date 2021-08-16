import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

export const CardList = (props) => {
    return (
        <div className="m-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.item.image} />
                    <Card.Body>
                        <Card.Title>{props.item.title}</Card.Title>
                        <Card.Text>
                            {props.item.content}
                        </Card.Text>
                        <a href={props.item.url} variant="light" rel="noreferrer" style={{borderRadius:'0px', border:'1px dashed', padding:'5px', textDecoration:'none'}} target="_blank">Read full Article</a>
                    </Card.Body>
                </Card>            
        </div>
    )
}

export default CardList