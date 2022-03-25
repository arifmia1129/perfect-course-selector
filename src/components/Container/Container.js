import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import "./Container.css";

const Container = () => {
    const courses = [
        { name: "C Programming Course", price: 1500, img: "images/c.png" },
        { name: "C# Programming Course", price: 2500, img: "images/c-s.jpg" },
        { name: "C++ Programming Course", price: 3000, img: "images/c++.png" },
        { name: "Java Programming Course", price: 3500, img: "images/java.png" },
        {
            name: "Javascript Programming Course", price:
                3500, img: "images/javascript.jpg"
        },
        { name: "Python Programming Course", price: 4000, img: "images/python.jpg" },
        { name: "Go Programming Course", price: 4500, img: "images/go.png" },
        { name: "HTML Course", price: 1500, img: "images/html.png" },
        { name: "CSS Course", price: 1500, img: "images/CSS.png" },
        { name: "React Course", price: 1500, img: "images/react.png" },
        { name: "Web Development Course", price: 5500, img: "images/web.png" },
        { name: "Machine Learning Course", price: 6000, img: "images/machine.png" }
    ];
    return (
        <div className='container'>
            <Row>
                <Col md={8} sm={12}>
                    <div className='course-container'>
                        <h1>Img</h1>
                        <img src="../../images/c#.jpg" alt="" />
                        {
                            courses.map(course => <Course course={course}></Course>)
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