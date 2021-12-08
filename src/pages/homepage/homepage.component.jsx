import React from 'react';

import './homepage.styles.scss';

import vertrep from '../../images/vertrep.jpg';
import nfl from '../../images/nfl.png';
import usffc from '../../images/usffc.png';

const Homepage = () => (
    <div className='homepage' style={{position: 'fixed', overflow: 'scroll', height: '100vh'}}>
		<div className='masthead conditional'>
			<img className='masthead-img' src={ vertrep } alt='A vertical replenishment in progress' />
			<div className='title'>
				<h2>U.S. Fleet Forces Command (USFFC)</h2>
				<h1>Naval Forces Logistics (NFL) Support and Training Services</h1>
				<div style={{ 
					borderTop: "6px solid #ff3300", 
					marginTop: 20,
					marginLeft: 0,
					marginBottom: 5,
					marginRight: 145 }}>
				</div>
				<img className='insignia' src={ nfl } alt='Naval Forces Logistics insiginia' />
				<img className='insignia' src={ usffc } alt='U.S. Fleet Forces insiginia' />
			</div>
		</div>

        <div className='about'>
			<div className='smallTitle'>
				<h2>U.S. Fleet Forces Command (USFFC)</h2>
				<h1>Naval Forces Logistics (NFL) Support and Training Services</h1>
			</div>
			<h4>About Us</h4>
			<p>The Naval Forces Logistics team has been delivering quality logistics support services to
			the fleet under various programs for over 30 years. Our extensive legacy of service began in 1987
			with the launch of what was then known as the Shiprider program, in conjunction with numerous other
			short-term contracts and set-aside delivery orders under the direction of NAVSUP.</p>
			<p>In 1996, the services provided under Shiprider and its associated programs were consolidated into
			the Fleet Assistance and Shipboard Training (FAST) program, and continued under its follow-on contracts,
			FAST2010 and Beyond FAST2010.</p>
			<p>As of January 2017, U.S. Fleet Forces Command (USFFC) assumed responsibility for the program – now
			formally known as Naval Forces Logistics (NFL) Support and Training Services – which supports fleet
			logistics operations at locations worldwide. In addition to USFFC, our significant customers include:</p>
			<ul>
				<li>Commander Naval Air Forces Atlantic and Pacific (CNAL/CNAP)</li>
				<li>Commander Naval Surface Forces Atlantic and Pacific (CNSL/CNSP)</li>
				<li>Commander Submarine Forces Atlantic and Pacific (CSL/CSP)</li>
				<li>U.S. Marine Corps Aviation Support Activities (1st, 2nd, 3rd, and 4th MAWs)</li>
				<li>Naval Expeditionary Command Commands (NECC)</li>
			</ul>
            <h4>Who We Are</h4>
			<p>The USFFC NFL program currently employees over 300 personnel globally, virtually all of whom are co-located
			with our customers. All of our logistics and information systems analysts are former Navy and Marine Corps
			personnel, many of them retirees with over 20 years of active duty experience.</p>
			<h4>What We Do</h4>
			<p>USFFC’s stated mission is to provide global logistics support services for Naval Operation Forces within
			USFFC, CPF, and MARFORCOM, in the following five mission areas:</p>
			<ul>
				<li>General Stores</li>
				<li>Food Service Management</li>
				<li>Retail Operations Management</li>
				<li>Disbursing Operations</li>
				<li>3M</li>
			</ul>
			<p>A core element of our support efforts is our NFL Toolbox – a virtual library of over 400 risk forms, checklists,
			schedules, and training aids developed over the life of the program that provides the NFL team and stakeholders with
			real-time, worldwide access to support all performance work statement task operations. If a process or metric for
			addressing an issue does not exist, it is created and added to our Toolbox for future use.  This approach allows the
			USFFC NFL team to achieve our key performance goal of improving stakeholders’ ability to become independently
			“Brilliant at the Basics” in supporting their unit and command’s day-to-day readiness requirements.</p>
			<h4>Our Training</h4>
			<p>In addition to on-site assistance and “over-the-shoulder” training, the USFFC NFL team conducts regularly
			scheduled formal training seminars on a wide range of topics of interest to fleet logisticians. Each seminar
			lasts from one to five days, and can be tailored to suit the specific needs of the audience in attendance.
			cheduled seminars are conducted year-round at the following locations: </p>
			<ul>
				<li>Naval Station (NAVSTA) Norfolk, VA</li>
				<li>Naval Station (NAVSTA) San Diego, CA</li>
				<li>Naval Station (NAVSTA) Mayport, FL</li>
				<li>Naval Air Station (NAS) North Island, CA</li>
			</ul>
			<p>We also conduct seminars on a variety of topics on an “as-requested” basis at the locations listed above, and at the following location:</p>
			<ul>
				<li>Naval Station (NAVSTA) Bremerton, WA</li>
				<li>Naval Station (NAVSTA) Everett, WA</li>
				<li>Naval Station (NAVSTA) Pearl Harbor, HI</li>
				<li>Marine Corps Air Station (MCAS) Cherry Point, NC</li>
				<li>Commander, Fleet Activity (CFA) Yokosuka, Japan</li>
			</ul>
			<p>To see a schedule of seminars for the current fiscal year, or a list of training available upon request,
			click the “Seminars and Training” link in the navigation bar at the top of this page.</p>
			<p style={{color: 'black'}}>p</p>
			<p style={{color: 'black'}}>p</p>
        </div>
	</div>
);

export default Homepage;