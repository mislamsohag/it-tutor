import React from 'react';
import { useParams } from 'react-router-dom';
import useUsers from './../../Hook/useUsers';

const ServiceInfo = () => {

    let { serviceId } = useParams();
    return (
        <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{serviceId}</h5>

        </div>
    );
};

export default ServiceInfo;