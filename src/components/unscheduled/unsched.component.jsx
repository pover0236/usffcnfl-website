import React from 'react';
import Async from 'react-async';
import GenWrap from '../../genericWrapper';

//@ts-ignore
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';

// Request Data from API
const loadUnsched = () =>
  fetch("https://x73lmaljkc.execute-api.us-east-1.amazonaws.com/items")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

// DisplaySchedule component
function DisplayUnsched() {
	return (
		<table className='table table-striped'>
		<Async promiseFn={loadUnsched}>
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
            console.log(data.Items)
			return (
				<GenWrap>
				<thead>
					<tr>
					  <th>Topic</th>
					  <th>Offered By</th>
					  <th>Request Info</th>
					</tr>
				</thead>
				<tbody>
				{data.Items.map(unsched=> (
					<GenWrap>
						<tr key={unsched.code}>
							<td>{unsched.CourseName} ({unsched.Platform})</td>
							<td>{unsched.OfferedBy}</td>
							<td className='centered' 
								data-toggle='tooltip' 
								title='Click to request info'>
								<button  type="button" 
									className='btn btn-outline-secondary btn-sm regBtn'>
									Request
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

export default DisplayUnsched;