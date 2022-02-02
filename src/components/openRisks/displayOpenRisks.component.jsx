import React from 'react';
import Async from 'react-async';
import GenWrap from '../../genericWrapper';

//@ts-ignore
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import pdf from '../../images/PDF_24.png';

// Request Data from API
const loadOpenRisks = () =>
  fetch("https://xuqj1ufu0l.execute-api.us-east-1.amazonaws.com/items")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

// DisplaySchedule component
function DisplayOpenRisks() {
	return (
		<table className='table table-striped'>
		<Async promiseFn={loadOpenRisks}>
			{({ data, err, isLoading }) => {
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
			console.log(data)
			return (
				<GenWrap>
				<thead>
				<tr>
					<th>ID Number</th>
					<th className='centered'>Criticality</th>
					<th>Title</th>
					<th>ID Date</th>
					<th>View</th>
				</tr>
				</thead>
				<tbody>
				{data.Items.map(risk=> (
					<GenWrap>
						<tr key={risk.id}>
							<td>{risk.id}</td>
							<td className='centered'>{risk.criticality}</td>
							<td>{risk.title}</td>
							<td>{risk.openDate}</td>
							<td
								data-toggle='tooltip' 
								title='Click to view PDF'>
								<img src={ pdf } alt='Adobe Acrobat PDF logo' />
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

export default DisplayOpenRisks;