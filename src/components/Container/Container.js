import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import "./Container.css";

const Container = () => {
    const courses = [
        { id: 1, name: "C Course", price: 1500, img: "images/c.png", duration: "4 month", medium: "Online" },
        { id: 2, name: "C# Course", price: 2500, img: "images/c-s.jpg", duration: "4 month", medium: "Online" },
        { id: 3, name: "C++ Course", price: 3000, img: "images/c++.png", duration: "4 month", medium: "Online" },
        { id: 4, name: "Java Course", price: 3500, img: "images/java.png", duration: "4 month", medium: "Online" },
        {
            id: 5, name: "Javascript Course", price:
                3500, img: "images/javascript.jpg"
            , duration: "4 month", medium: "Online"
        },
        { id: 6, name: "Python Course", price: 4000, img: "images/python.jpg", duration: "4 month", medium: "Online" },
        { id: 7, name: "Go Programming Course", price: 4500, img: "images/go.png", duration: "4 month", medium: "Online" },
        { id: 8, name: "HTML Course", price: 1500, img: "images/html.png", duration: "4 month", medium: "Online" },
        { id: 9, name: "CSS Course", price: 1500, img: "images/CSS.png", duration: "4 month", medium: "Online" },
        { id: 10, name: "React Course", price: 1500, img: "images/react.png", duration: "4 month", medium: "Online" },
        { id: 11, name: "Web Development Course", price: 5500, img: "images/web.png", duration: "4 month", medium: "Online" },
        { id: 12, name: "Machine Learning Course", price: 6000, img: "images/machine.png", duration: "4 month", medium: "Online" }
    ];
    return (
        <div className='container'>
            <Row>
                <Col md={8} sm={12}>
                    <div className='course-container'>
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