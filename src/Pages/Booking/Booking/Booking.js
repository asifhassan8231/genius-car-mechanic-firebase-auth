import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../../hooks/useServices';

const Booking = () => {
    const { services } = useServices();
    const { serviceId } = useParams();
    const serviceSingle = (services.find(srv => srv.id === parseInt(serviceId)));

    return (
        <div>
            <h2>This is booking of {serviceId}</h2>
            <img src={serviceSingle?.img} alt="" />
            <h3>{serviceSingle?.name}</h3>
            <p>{serviceSingle?.description}</p>
            <p>Price:{serviceSingle?.price}</p>
        </div>
    );
};

export default Booking;