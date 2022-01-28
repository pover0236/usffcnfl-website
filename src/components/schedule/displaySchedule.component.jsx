import React from 'react';
import Async from 'react-async';
import GenWrap from '../../genericWrapper';

//@ts-ignore
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './schedule.styles.scss';

let mnth = -1;

// Request Data from API
const loadSchedule = () =>
  fetch("https://566tpdflpl.execute-api.us-east-1.amazonaws.com/items")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

// DisplaySchedule component
function DisplaySchedule() {
	return (
		<table className='table table-striped'>
		<Async promiseFn={loadSchedule}>
			{({ data, err, isLoading }) => {
			//if (isLoading) return "Loading..."
			//if (err) return `Something went wrong: ${err.message}`
			if (isLoading) return (
				<tbody>
					<tr>
						<td colSpan='5'>Loading...</td>
					</tr>
				</tbody>
			)
			if (err) return (
				<tbody>
					<tr>
						<td colSpan='5'>`Something went wrong: ${err.message}`</td>
					</tr>
				</tbody>
			)
			if (data)
			return (
				<GenWrap>
				<thead>
					<tr>
					  <th>Date(s)</th>
					  <th>Seminar</th>
					  <th>Offered By</th>
					  <th>Location</th>
					  <th>Register</th>
					</tr>
				</thead>
				<tbody>
				{data.Items.map(sched=> (
					<GenWrap>
						<GenWrap>
							{getMonthHeader(mnth, sched.startDate)}
						</GenWrap>
						<tr key={sched.eventID}>
							<td>{getDateString(sched.startDate,sched.endDate)}</td>
							<td>{sched.courseName} ({sched.platform})</td>
							<td>{sched.team}</td>
							<td>{sched.installation} (Bldg. {sched.bldg})</td>
							<td className='centered' 
								data-toggle='tooltip' 
								title='Click to register'>
								<button  type="button" 
									className='btn btn-outline-secondary btn-sm regBtn'>
									Register
								</button>
							</td>
						</tr>
					</GenWrap>
				))}
				</tbody>
				</GenWrap>
			)
			}}
		</Async>
		<GenWrap>
            <tfoot>
                <tr><td></td></tr>
                <tr><td></td></tr>
                <tr><td></td></tr>
                <tr><td></td></tr>
            </tfoot>
        </GenWrap>
    </table>
  );
}

const getMonthHeader = function(m, d){
	let classDate = new Date(d);
	let curMnth = m;
			if (classDate.getMonth() > curMnth) {
			mnth = classDate.getMonth()
				return (
					<tr className='monthName'>
						<td colSpan='5'>
							{getFullMonthName(curMnth+1)}
						</td>
					</tr>
				);
			}
			else {return null};
};

// Get a properly formatted date range from passed 'start' and 'end' dates
const getDateString = function(s,e) {
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
const getShortMonthName = function(m) {
	const months = [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun",
		"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
	];
	//const d = new Date();
	let month = months[m];
	return month;
}

// Return the full month name based on the month passed
const getFullMonthName = function(m) {
	const months = [
		"January", "February", "March", "April", "May", "June",
		"July", "August", "Sepember", "October", "November", "December"
	];
	//const d = new Date();
	let month = months[m];
	return month;
}

export default DisplaySchedule;