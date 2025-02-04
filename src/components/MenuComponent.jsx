import React from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/style.css';

const MenuComponent = () => {
    const history = useHistory();

    const navigateToPage = (page) => {
        history.push(`/login?mode=${page}`);
    };

    return (
        <div className="menu-wrapper">
            <div className="banner-container">
                <h1 className="animated-banner">
                    Mortgage Loan Application
                </h1>
            </div>
            <div className="button-container">
                <button onClick={() => navigateToPage('signin')} className="btn btn-outline-light btn-lg mx-4">
                    Sign In
                </button>
                <button onClick={() => navigateToPage('signup')} className="btn btn-outline-light btn-lg mx-4">
                    Sign Up
                </button>
            </div>
            <div className="about-section">
                <h3 className="about-title">About Developer</h3>
                <p className="about-text">
                </p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/shivaram-doddi/" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="social-link">LinkedIn</a>
                    <a href="https://www.instagram.com/shivaram__d/" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="social-link">Instagram</a>
                    <a href="https://github.com/shivaram0583" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="social-link">GitHub</a>
                </div>
            </div>
        </div>
    );
};

export default MenuComponent;
