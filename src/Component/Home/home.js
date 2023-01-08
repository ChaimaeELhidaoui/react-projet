import React, { Fragment } from 'react';
import Header from './Header/Header'
import './home.css';
import Services from './services/services';
import Banner from './Banner/Banner'
import Pricing from './pricing/pricing'

const Home = () => {
    return (
        <Fragment>
        <Header/>
        <Services/>
        <Banner/>
        <Pricing/>
        </Fragment>
    )
}
export default Home;