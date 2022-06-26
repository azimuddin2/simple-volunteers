import React from 'react';
import './Volunteer.css';

const Volunteer = ({volunteer}) => {
    const {img, title} = volunteer;

    return (
        <div className='volunteer'>
            <img src={img} alt="" />
            <h2>{title}</h2>
        </div>
    );
};

export default Volunteer;