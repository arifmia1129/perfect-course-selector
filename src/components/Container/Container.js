import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import Summary from '../Summary/Summary';
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
        { id: 7, name: "Go Course", price: 4500, img: "images/go.png", duration: "4 month", medium: "Online" },
        { id: 8, name: "HTML Course", price: 1500, img: "images/html.png", duration: "4 month", medium: "Online" },
        { id: 9, name: "CSS Course", price: 1500, img: "images/CSS.png", duration: "4 month", medium: "Online" },
        { id: 10, name: "React Course", price: 1500, img: "images/react.png", duration: "4 month", medium: "Online" },
        { id: 11, name: "Web Development", price: 5500, img: "images/web.png", duration: "4 month", medium: "Online" },
        { id: 12, name: "Machine Learning", price: 6000, img: "images/machine.png", duration: "4 month", medium: "Online" }
    ];
    const [course, setCourse] = useState([]);
    const selectCourse = (selectCourse) => {
        const exist = course.find(singleCourse => singleCourse.id === selectCourse.id);

        if (course.length < 4) {
            if (!exist) {
                const totalSelectCourse = [...course, selectCourse];
                setCourse(totalSelectCourse);
            }
            else {
                alert("This course already exists!");
            }
        }
        else {
            alert("Hey! You already select 4 course. Selected course range is : 4!")
        }


    }


    const perfectCourse = () => {
        function existsFunction() {
            let exists = course.find(single => single.id === Math.floor(Math.random() * 15));
            if (!exists) {
                return existsFunction();
            }
            return exists;
        }
        const perfectCourse = existsFunction();
        setCourse([perfectCourse]);
    }

    const chooseAgain = () => {
        setCourse([]);
    }

    const removeItem = (selectCourse) => {
        const rest = course.filter(single => single.id !== selectCourse.id);
        setCourse(rest);
    }
    return (
        <div className='container'>
            <Row>
                <Col md={8} sm={12}>
                    <div className='course-container'>
                        {
                            courses.map(course => <Course key={course.id} course={course} selectCourse={selectCourse}></Course>)
                        }
                    </div>
                </Col>
                <Col md={4} sm={12}>
                    <div className='summary-container'>
                        <h2 className='summary-title'>Course Summary</h2>
                        {
                            course.map(singleCourse => <Summary key={singleCourse.id} single={singleCourse} perfectCourse={perfectCourse} removeItem={removeItem}></Summary>)
                        }
                        <div className="btn-container">
                            <div>
                                <button className='lucky' onClick={perfectCourse}>Perfect for you</button>
                            </div>
                            <div>
                                <button className='again' onClick={chooseAgain}>Choose again</button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Container;