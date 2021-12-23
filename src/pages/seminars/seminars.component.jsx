import React from 'react';
import Banner from '../../components/banner/banner.component';
import { getSchedule } from './schedule';

import './seminars.styles.scss';

const Seminars = () => (
    <div  className='seminars'>
        <Banner subTitle = "Seminar Schedule" />
        <div className='intro' >
            <p>The seminars listed below are conducted at the locations shown on the specified date(s). You can view a brief
            description of any seminar by clicking its title. Clicking the building number next to the class location will
            display a printable Google map and directions to that building. You can also choose to view only those classes offered at PAC or LANT locations by
            selecting the appropriate option in the 'Show' option group.</p>
            <p>To register for a seminar, click the "Register" button to the right of the seminar's title. Note that multiple
            student's can be registered for a seminar on a single registration form.</p>
        </div>
        <div className='schedule'>
        <table className='table table-condensed'>
			<thead className='colHead'>
				<tr>
					<th>Date(s)</th>
					<th>Class</th>
					<th>Offered By</th>
					<th>Location</th>
					<th className='centered'>Registration</th>
				</tr>
			</thead>
			<tbody id='schedule'>
                getSchedule('courseName')
            </tbody>
		</table>
        </div>
 
    </div>
);

export default Seminars;