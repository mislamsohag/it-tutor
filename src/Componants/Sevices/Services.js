import React from 'react';
import SingleService from '../SingleService/SingleService';
import useUsers from './../../Hook/useUsers';

const Services = () => {
    const allUsers = useUsers('data.json');

    // console.log(allUsers)
    return (
        <div className='px-4 py-4 mx-auto max-w-7xl'>
            <div className=' grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>

                {
                    allUsers?.map(user => <SingleService
                        key={user.id}
                        user={user}></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;