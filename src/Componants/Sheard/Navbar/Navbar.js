import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from './../../ActiveLink/ActiveLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';


const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='sticky top-0 bg-gray-100 px-20 py-5 flex justify-center md:justify-between'>
            <div className='hidden md:block'><Link to={'/'} className="font-sans font-bold text-xl text-gray-600">Sohag's IT Care</Link></div>
            <div className='flex gap-4 text-xl'>
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/services'>Services</ActiveLink>
                <ActiveLink to='/blogs'>Blogs</ActiveLink>
                <ActiveLink to='/about'>About</ActiveLink>

                {
                    !user ? <ActiveLink to='/login'>Login</ActiveLink> : <span>{user.email}<button onClick={() => signOut(auth)} type='button' className='btn btn-light'>Log Out</button></span>
                }
            </div>
        </div>
    );
};

export default Navbar;