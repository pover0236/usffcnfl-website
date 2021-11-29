import React from 'react';
import 'bootstrap/js/dist/dropdown'

import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.styles.css'

const MyNavbar = () => (
    <div id='navmenu'>
        <nav className='navbar navbar-expand-sm navbar-dark'>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#NFLNavbar'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='NFLNavbar'>
            <ul className='navbar-nav'>
                <li className='nav-item' id='Home'><a className='nav-link' href='#'>Home</a></li>
                <li className='nav-item dropdown' id='Seminars'>
                    <a className='nav-link dropdown-toggle' id='tngDropdown' href='#semandtng' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Seminars and Training
                    </a>
                    <div className='dropdown-menu' aria-labelledby='tngDropdown'>
                        <a className='dropdown-item' href='#schedule'>Seminar Schedule</a>
                        <a className='dropdown-item' href='#unsched'>Unscheduled Training</a>
                    </div>
                </li>
                <li className='nav-item dropdown' id='Risk'>
                    <a className='nav-link dropdown-toggle' href='#' id='riskDropdown' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Risk Management Forms
                    </a>
                    <div className='dropdown-menu' aria-labelledby='riskDropdown'>
                        <a className='dropdown-item' href='#openrisks'>Open Risk Forms</a>
                        <a className='dropdown-item' href='#closedrisks'>Closed Risk Forms</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
            </li>
            </ul>
            </div>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-secondary" type="submit">Search</button>
            </form>
        </nav>
    </div>
);

export default MyNavbar;