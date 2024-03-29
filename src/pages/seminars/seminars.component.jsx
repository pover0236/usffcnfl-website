import React from 'react';
import Banner from '../../components/banner/banner.component';
import DisplaySchedule from '../../components/schedule/displaySchedule.component'

import './seminars.styles.scss';

const Seminars = () => (
    <div  className='seminars'>
        <div><Banner subTitle = 'Seminar Schedule'/></div>
        <div className='intro' >
            <h3>USFFC-NFL Seminars</h3>
            <p>The seminars listed below are conducted at the locations shown on the specified date(s). You can view a brief
            description of any seminar by clicking its title. Clicking the building number next to the class location will
            display a printable Google map and directions to that building. You can also choose to view only those classes offered at PAC or LANT locations by
            selecting the appropriate option in the 'Show' option group.</p>
            <p>To register for a seminar, click the "Register" button to the right of the seminar's title. Note that multiple
            student's can be registered for a seminar on a single registration form.</p>
        </div>
        <div className='schedule'>
            <DisplaySchedule/>
        </div>
    </div>
);

export default Seminars;