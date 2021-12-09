import React from 'react';
import Banner from '../../components/banner/banner.component';

import './closedrisks.styles.scss';

const ClosedRisks = () => (
    <div  className='closedrisks'>
        <Banner subTitle = 'Closed Risk Management Forms' />
        <div className='intro'>
            <p>As part of our pursuit of continual process improvement, the Programs Support Team (PST) will utilize the
            USFFC NFL Risk Form to populate information in the PST Website to analyze future integrated systems and
            requirements, recognize associated limitations, and publish known risks so as to support predictions of related risk situations before they occur. The USFFC NFL Risk Form serves to document risks that may be identified in the process of executing USFFC NFL taskings or are identified by other persons or programs that will affect USFFC NFL execution. The purpose for identifying these risks is the compilation of the PST database that contains identification data not only about the many risks inherent in the execution of USFFC NFL taskings, but also the mitigation actions employed.</p>
            <p>You can view a brief description of any risk by clicking its title in the table below. To view the complete risk form, which includes mitigation actions, click the PDF icon in the 'View' column for that risk.</p>
        </div>
        <div className='closedrisklist'>
            <table  className='table table-condensed'>
                <thead>
                <tr>
                    <th>ID Number</th>
                    <th className='centered'>Criticality</th>
                    <th>Title</th>
                    <th>ID Date</th>
                    <th>Close Date</th>
                    <th className='centered'>View</th>
			    </tr>
                </thead>
            </table>
        </div>
    </div>
);

export default ClosedRisks;