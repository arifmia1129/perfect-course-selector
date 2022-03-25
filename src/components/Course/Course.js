import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import "./Course.css";
const Course = ({ course }) => {
    const { duration, medium, name, price, img } = course;

    return (
        <div >
            <Card className='card'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{price} <span>৳</span></ListGroupItem>
                    <ListGroupItem>Duration: {duration}</ListGroupItem>
                    <ListGroupItem>Class system: {medium}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;