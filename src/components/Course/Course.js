import React from 'react';
const Course = (props) => {
    console.log(props);
    return (
        <div>
            <img src={props.course.img} alt="" />
            <img src="" alt="" />
            <h1>{props.course.name}</h1>
        </div>
    );
};

export default Course;