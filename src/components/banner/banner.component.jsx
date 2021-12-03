import React from "react";

import nfl from '../../images/nfl.png';

import './banner.styles.scss';

const Banner = () => (
    <div className='banner'>
		<div className='banner-title'>
		<img src={ nfl } alt='Naval Forces Logistics insignia' />
			<h1>USFFC Naval Forces Logistics (NFL)</h1>
			<h2>Support and Training Services</h2>
		</div>
    </div>

);

export default Banner;