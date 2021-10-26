import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const { services } = useServices();
    return (
        <div id="services">
            <h3>Our Services:{services.length}</h3>
            <div className="service-container mt-5">
                {
                    services.map(service => <Service key={service.id}
                        service={service}></Service>)
                }
            </div>
        </div>

    );
};

export default Services;