
import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Toaster } from 'react-hot-toast';

const HomeLayout = () => {
    return (
        <div className='bg-purple-100'>
            <Toaster position="top-right" />
            <header>
                <Navbar />
            </header>
            <main>
                <section>
                    <Outlet />
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default HomeLayout;
