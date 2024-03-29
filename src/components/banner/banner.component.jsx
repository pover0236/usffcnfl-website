import React from "react";

import nfl from '../../images/nfl.png';

import './banner.styles.scss';

const Banner = (props) => (
	<div className='container-fluid banner' >
		<div className='conditional' >
			<img className='insignia' src={ nfl } alt='Naval Forces Logistics insignia' width='100%' />
		</div>
		<div className='banner-title'>
			<h2>USFFC Naval Forces Logistics (NFL)</h2>
			<h1>{ props.subTitle  }</h1>
		</div>
	</div>
);

export default Banner;