import React from 'react';
import Footer from '../Sheard/Footer/Footer';
import Navbar from '../Sheard/Navbar/Navbar';



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section>
                <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
                    <div className="h-full content-center">

                        <h3 className=' text-3xl  text-center text-20 pb-4'> Welcome to <span className="font-bold italic">Sohag's IT Care</span></h3>

                        <button className="py-1 px-3 text-white mt-3 mx-1 bg-cyan-600 w-auto sm:mb-0 rounded-full">Go to Details</button>
                    </div>
                </div >
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Home;