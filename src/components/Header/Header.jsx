import React from 'react';
import './Header.css'

const Header = () => {
    return (

        <div className="header-container flex flex-wrap items-center justify-between px-5 py-5 bg-gray-800 rounded-lg">
            <a className="knowledge-logo text-2xl font-bold text-white mb-2 md:mb-0" href="#">Knowledge Cafe</a>
            <button className="navbar-toggler md:hidden block" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <nav className="nav-items md:flex-grow md:flex md:items-center md:w-auto hidden" id="navbarSupportedContent">
                <a href="/" className="block mt-4 md:inline-block md:mt-0 mr-4 md:mr-6 text-lg text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:-translate-x-1 rounded-full py-2 px-4">
                    Home
                </a>
                <a href="/service" className="block mt-4 md:inline-block md:mt-0 mr-4 md:mr-6 text-lg text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:-translate-x-1 rounded-full py-2 px-4">
                    Service
                </a>
                <a href="/contact" className="block mt-4 md:inline-block md:mt-0 mr-4 md:mr-6 text-lg text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:-translate-x-1 rounded-full py-2 px-4">
                    Contact
                </a>
            </nav>
            <img className="nav-profile w-12 md:w-12 h-12  sm:rounded-full rounded-full object-cover object-center" src="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=612x612&w=is&k=20&c=acQ7V92QEYwAs6ojhpTSCRR3m8eCePNiJihHcu4jjoU=" alt="" />
        </div>
    );
};

export default Header;