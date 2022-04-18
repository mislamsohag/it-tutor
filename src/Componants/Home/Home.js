import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import SingleService from '../SingleService/SingleService';
import useUsers from './../../Hook/useUsers';

const Home = () => {

    const users = useUsers('data.json')
    // এখানে আমি Custom Hook useUsers() input করে তাতে URL/Data প্রপস্‌ আকারে পাঠিয়েছি। এবং তা হুক দিয়ে প্রসেস করে users নামে রিসিভ করেছি।

    // console.log(users);

    if (users.length) {
        users.length = 3;
    }
    // এখানে if condition দেয়ার মানে হলো যাতে Falsy vlaue সেট না করে এবং ডাটা না পেলে empty value হিসেবে সেট করে।

    // console.log(users)

    return (
        <div className='px-4 py-4 mx-auto max-w-7xl'>
            <h1 className='mb-3 text-3xl text-center'>Welcome to <span className='text-blue-600'>Sohag's IT Care</span></h1>
            <Header></Header>
            <div className=' grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {
                    users.map(user => <SingleService
                        key={user.id}
                        user={user}></SingleService>)
                }
            </div>
            <Link to="/services">Load More........</Link>
        </div>
    );
};

export default Home;