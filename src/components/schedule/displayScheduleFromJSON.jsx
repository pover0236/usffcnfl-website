//import { CognitoIdentityCredentials } from 'aws-sdk';
import React from 'react'
import FetchData from './schedule.json';

function DisplaySchedule() {
	const data = FetchData
	const getRows = data => {
		let content =[];
		for (let i = 0; i < data.length; i++) {
			const item = data[i];
			content.push(
				<tr key={item.eventID}>
				<td>{getDateString(item.startDate,item.endDate)}</td>
				<td>{item.courseName} ({item.platform})</td>
				<td>{item.team}</td>
				<td>{item.installation} (Bldg. {item.bldg})</td>
				<td className='centered' 
					data-toggle='tooltip' 
					title='Click to register'>
						<button  type="button" 
							className='btn btn-outline-secondary btn-sm regBtn'>
								Register
						</button>
				</td>
			</tr>
			);
		}
		return content;
	}
	return <tbody>{getRows(data)}</tbody>
}
		
// Get a properly formatted date range from passed 'start' and 'end' dates
const getDateString = function (s,e) {
	var sDate, eDate, dateString;
	sDate = new Date(s);
	eDate = new Date(e);
	if (s === e) {
		dateString =
			sDate.getDate() + " " +
			getShortMonthName(sDate.getMonth()) + " " +
			sDate.getFullYear().toString().substr(2,3);
	} else if (sDate.getMonth() === eDate.getMonth()) {
		dateString =
			sDate.getDate() + "-" +
			eDate.getDate() + " " +
			getShortMonthName(sDate.getMonth()) + " " +
			sDate.getFullYear().toString().substr(2,3);
	} else if (sDate.getFullYear() === eDate.getFullYear()) {
			dateString =
				sDate.getDate() + " " +
				getShortMonthName(sDate.getMonth()) + " - " +
				eDate.getDate() + " " +
				getShortMonthName(eDate.getMonth()) + " " +
				sDate.getFullYear().toString().substr(2,3);
	} else {
			dateString =
				sDate.getDate() + " " +
				getShortMonthName(sDate.getMonth()) + " " +
				sDate.getFullYear().toString().substr(2,3) + " - " +
				eDate.getDate() + " " +
				getShortMonthName(eDate.getMonth()) + " " +
				eDate.getFullYear().toString().substr(2,3);
	}
	return dateString;
}

// Return an abbrevieated month based on the month passed
const getShortMonthName = function (m) {
	var mString
	switch(m) {
		case 0: mString = "Jan";
		break;
		case 1: mString = "Feb";
		break;
		case 2: mString = "Mar";
		break;
		case 3: mString = "Apr";
		break;
		case 4: mString = "May";
		break;
		case 5: mString = "Jun";
		break;
		case 6: mString = "Jul";
		break;
		case 7: mString = "Aug";
		break;
		case 8: mString = "Sep";
		break;
		case 9: mString = "Oct";
		break;
		case 10: mString = "Nov";
		break;
		case 11: mString = "Dec";
		break;
		default: mString = "";
	}
	return mString;
}
/*
// Return a full month name based the month passed
const getFullMonthName = function(m) {
	var mString
	switch(m) {
		case 0: mString = "January";
		break;
		case 1: mString = "February";
		break;
		case 2: mString = "March";
		break;
		case 3: mString = "April";
		break;
		case 4: mString = "May";
		break;
		case 5: mString = "June";
		break;
		case 6: mString = "July";
		break;
		case 7: mString = "August";
		break;
		case 8: mString = "September";
		break;
		case 9: mString = "October";
		break;
		case 10: mString = "November";
		break;
		case 11: mString = "December";
		break;
		default: mString = "";
	}
	return mString;
}*/

export default DisplaySchedule;