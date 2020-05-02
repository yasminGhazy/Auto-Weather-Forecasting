import React, { Component } from 'react';

import "./header.scss";
import Logo from './../../img/logo.png';
export default class header extends React.Component {
    render() {
        return (
            <header >
                <nav className="navbar navbar-expand-lg fixed-top">
                    <div className="overlay"></div>
                    <div className="container-fluid d-flex align-content-center">
                        <a className="navbar-brand white-clr" href="#">
                            <img className="img-logo-footer mr-2" src={Logo} alt="Weather" />
                        Weather</a>
                        <button className="navbar-toggler text-center align-self-center" id="nav-toggle" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">

                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="d-flex justify-content-center">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">HOME</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">ABOUT</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">PORTFOLIO</a>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

            </header>
        );
    };
}