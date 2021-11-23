import React from 'react';
import './navbar.styles.css';

const Navbar = () => (
<div id='navmenu' class='navbar'>
	<ul>
		<li><a href='#'>About</a></li>
		<li class='dropdown'>
			<a href='javascript:void(0)' class='dropbtn'>Seminars and Training</a>
			<div class="dropdown-content">
					<a href="#">Seminar Schedule</a>
					<a href="#">Unscheduled Training</a>
    			</div>			
		</li>
		<li class='dropdown'>
			<a href='javascript:void(0)' class='dropbtn'>Risk Management Forms</a>
				<div class="dropdown-content">
					<a href="#">Open Risk Forms</a>
					<a href="#">Closed Risk Forms</a>
    			</div>
		</li>
	</ul>
</div>
);

export default Navbar;