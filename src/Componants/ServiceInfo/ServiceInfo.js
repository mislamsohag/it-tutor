
import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const ServiceInfo = () => {

    const { serviceId } = useParams();
    const [details, setDetails] = useState([]);
    const [serviceDetail, setServiceDetail] = useState([]);


    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    console.log(details)

    useEffect(() => {
        if (details.length > 0) {
            const matchData = details.find(detail => detail.id == serviceId)
            setServiceDetail(matchData)
        }

    }, [details, serviceId, serviceDetail]);


    return (
        <>
            <Card className='my-10  w-50 py-2 mx-auto max-w-7xl'>
                <Card.Img variant="top" src={serviceDetail?.image} />
                <Card.Body>
                    <Card.Title>Card Title : {serviceDetail?.name}</Card.Title>
                    <Card.Text>
                        {serviceDetail?.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </>
    );
};

export default ServiceInfo;