import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Category from '../../components/Category/Category';
import Footer from '../../components/Footer/Footer';
import Jobs from '../../components/Jobs/Jobs';

const Home = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Banner></Banner>
            <Category></Category>
            <Jobs></Jobs>
            <Footer></Footer>
        </div>
    );
};

export default Home;