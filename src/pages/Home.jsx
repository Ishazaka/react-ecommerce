import React from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import HomeProducts from '../components/HomeProducts';
import Slider from '../components/Slider';

const Home = () => {
    return (
        <>
            < Announcement />
            < Navbar />
            < Slider />
            <Categories />
            <HomeProducts />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Home