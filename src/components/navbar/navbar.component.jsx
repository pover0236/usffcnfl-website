import React from 'react';
import { Link } from 'react-router-dom';
//@ts-ignore
import 'bootstrap/dist/js/bootstrap.min';

import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.styles.css'

const MyNavbar = () => (
    <div id='navmenu'>
        <nav className='navbar navbar-expand-sm navbar-dark'>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#NFLNavbar'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='NFLNavbar'>
                <ul className='navbar-nav'>
                    <li className='nav-item' id='Home'><Link className='nav-link' to='/'>Home</Link></li>
                    <li className='nav-item dropdown' id='Seminars'>
                        <a className='nav-link dropdown-toggle' id='tngDropdown' href='#semandtng' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Seminars and Training
                        </a>
                        <div className='dropdown-menu' aria-labelledby='tngDropdown'>
                            <Link className='dropdown-item' to='/seminars'>Seminar Schedule</Link>
                            <Link className='dropdown-item' to='/unscheduled'>Unscheduled Training</Link>
                        </div>
                    </li>
                    <li className='nav-item dropdown' id='Risk'>
                        <a className='nav-link dropdown-toggle' href='#risks' id='riskDropdown' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Risk Management Forms
                        </a>
                        <div className='dropdown-menu' aria-labelledby='riskDropdown'>
                            <Link className='dropdown-item' to='/openrisks'>Open Risk Forms</Link>
                            <Link className='dropdown-item' to='/closedrisks'>Closed Risk Forms</Link>
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