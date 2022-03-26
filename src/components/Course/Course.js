import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import "./Course.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const Course = ({ course, selectCourse }) => {
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
                    <div>
                        <button className='button' onClick={() => selectCourse(course)}>Choose this course <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon></button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;