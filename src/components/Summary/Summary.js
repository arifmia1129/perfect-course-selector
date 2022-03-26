import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import "./Summary.css";
const Summary = ({ single, removeItem }) => {
    const { name, img } = single;
    return (
        <div >
            <div className='single'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h3>{name}</h3>
                </div>
                <div className='icon' onClick={() => removeItem(single)}>
                    <FontAwesomeIcon icon={faTrash} ></FontAwesomeIcon>
                </div>
            </div>

        </div>
    );
};

export default Summary;