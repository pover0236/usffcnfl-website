import React from 'react';
import './navbar.styles.css';

const Navbar = () => (
<div className='navbar'>
	<div className='horiznav'>
		<ul>
			<li><a href='about#'>About</a></li>
			<li className='dropdown'>
				<a href='#semandtng'>Seminars and Training</a>
				<div className="dropdown-content">
						<a href="#schedule">Seminar Schedule</a>
						<a href="#unscheduled">Unscheduled Training</a>
				</div>			
			</li>
			<li className='dropdown'>
				<a href='#riskfms'>Risk Management Forms</a>
					<div className="dropdown-content">
						<a href="#openrisks">Open Risk Forms</a>
						<a href="#closedrisks">Closed Risk Forms</a>
					</div>
			</li>
		</ul>
	</div>
	<div className='vertnav'>
		<div className='menu'>
			<a href='#menu-items'>
				<img src={require('./menu.png')} width='25px' alt='menu' />
			</a>
			<ul className='menu-items'>
				<li><a href='#about'>About</a></li>
				<li className='dropdown'>
					<a href='#semandtng'>Seminars and Training</a>
					<div className="dropdown-content">
							<a href="#schedule">Seminar Schedule</a>
							<a href="#unscheduled">Unscheduled Training</a>
					</div>
				</li>	
				<li className='dropdown'>
					<a href='#riskfms'>Risk Management Forms</a>
						<div className="dropdown-content">
							<a href="#openrisks">Open Risk Forms</a>
							<a href="#closedrisks">Closed Risk Forms</a>
						</div>
				</li>
			</ul>
		</div>
	</div>
</div>
);

export default Navbar;