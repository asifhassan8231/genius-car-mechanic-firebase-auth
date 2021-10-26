import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { name, price, description, img, id } = props.service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price:{price}</h5>
            <p className="px-5">{description}</p>
            <Link to={`/booking/${id}`}><button className="btn btn-warning">Book {name.toLowerCase()}</button></Link>
        </div>
    );
};

export default Service;