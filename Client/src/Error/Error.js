import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../pages/Header';
import error from "../img/404.jpg"
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <Header />
            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid pt-3">
                        <Link to="/"> <img style={{ height: "60vh", width: "100%" }} src={error} alt="" /></Link>
                        <hr />


                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Error;