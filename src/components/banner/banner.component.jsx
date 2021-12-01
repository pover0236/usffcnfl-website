import React from "react";

import nfl from '../../images/nfl.png';

import './banner.styles.css';

const Banner = () => (
    <div className='banner'>
		<div>
			<img src={ nfl } alt='Naval Forces Logistics Insignia'/>
		</div>
		<div>
			<h1>USFFC Naval Forces Logistics (NFL)</h1>
			<h2>Support and Training Services</h2>
		</div>
    </div>
);

export default Banner;