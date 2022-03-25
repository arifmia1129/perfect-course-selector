import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import "./Container.css";

const Container = () => {
    const courses = [
        { id: 1, name: "C Programming Course", price: 1500, img: "images/c.png" },
        { id: 2, name: "C# Programming Course", price: 2500, img: "images/c-s.jpg" },
        { id: 3, name: "C++ Programming Course", price: 3000, img: "images/c++.png" },
        { id: 4, name: "Java Programming Course", price: 3500, img: "images/java.png" },
        {
            id: 5, name: "Javascript Programming Course", price:
                3500, img: "images/javascript.jpg"
        },
        { id: 6, name: "Python Programming Course", price: 4000, img: "images/python.jpg" },
        { id: 7, name: "Go Programming Course", price: 4500, img: "images/go.png" },
        { id: 8, name: "HTML Course", price: 1500, img: "images/html.png" },
        { id: 9, name: "CSS Course", price: 1500, img: "images/CSS.png" },
        { id: 10, name: "React Course", price: 1500, img: "images/react.png" },
        { id: 11, name: "Web Development Course", price: 5500, img: "images/web.png" },
        { id: 12, name: "Machine Learning Course", price: 6000, img: "images/machine.png" }
    ];
    return (
        <div className='container'>
            <Row>
                <Col md={8} sm={12}>
                    <div className='course-container'>
                        <h1>Img</h1>
                        <img src="../../images/c#.jpg" alt="" />
                        {
                            courses.map(course => <Course key={course.id} course={course}></Course>)
                        }
                    </div>
                </Col>
                <Col md={4} sm={12}>
                    <div className='order-container'>
                        <h1>Order summary</h1>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Container;