import React from 'react';
import Banner from '../../components/banner/banner.component';
import DisplayUnsched from '../../components/unscheduled/unsched.component';
import './unsched.styles.scss';

const Unscheduled = () => (

    <div className='unscheduled'>
        <Banner subTitle = 'Unscheduled Training' />
        <div className='intro' >
            <p>Training on the topics listed below is conducted on an <i>as requested</i> basis. You can view a brief
            description of any training topic by clicking its title. To request training on a topic listed below, click the "Request"
            button to the right of the training title, and provide your contact information on the form provided. A USFFC-NFL training
            representative will then contact you to set up the requested training.</p>
            <p className="note"><b>NOTE: </b>Many of the classes listed below are offered as regularly scheduled seminars by other activities. Please
            check the Seminar Schedule to see if there is a regularly scheduled seminar that meets your training needs before requesting any
            unscheduled training.</p>
        </div>
        <div className='unsched'>
            <DisplayUnsched />
        </div>
    </div>
);

export default Unscheduled;