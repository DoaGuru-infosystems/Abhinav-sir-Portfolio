import React from 'react';
import { resumeData } from '../../data/resumeData';

const Services = () => {
    return (
        <div className="row service-wrapper items mt-md-5">
            {resumeData.services.map((service, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                    <div className="item d-flex align-items-start">
                        <div className="item-count">{service.id}</div>
                        <div className="content">
                            <h4 className="mt-0">{service.title}</h4>
                            <p>{service.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Services;
