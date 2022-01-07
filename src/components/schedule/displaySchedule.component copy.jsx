import React from 'react'
import * as AWS from 'aws-sdk';
//import FetchData from './schedule.json';

AWS.config.update({ region: "us-east-1", });

AWS.config.credentials = new AWS.CognitoIdentityCredentials({
	IdentityPoolId: "us-east-1:63731e7d-6fe1-4073-9390-6b5ea777b0c3",
	RoleArn: "arn:aws:iam::063813534118:role/Cognito_DynamoPoolUnauth"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
	TableName : "Schedule",
	IndexName : "ProgramIndex",
	KeyConditionExpression: "program = :p",
	ExpressionAttributeValues: {
		":p": "USFFC-NFL"
	}
}

//docClient.query(params, FetchData);

async function FetchData() {
    try {
        var response = await docClient.query(params).promise()
		return response.Items
    } catch (error) {
        console.error(error);
    }
};

function JsonDataDisplay() {
	const data = Object.entries(FetchData())
	console.log(data)
	const DisplayData = data.map(
		(info)=>{
			return(
				<tr>
					<td>{getDateString(info.startDate,info.endDate)}</td>
					<td>{info.courseName} ({info.platform})</td>
					<td>{info.team}</td>
					<td>{info.installation} (Bldg. {info.bldg})</td>
					<td className='centered' 
						data-toggle='tooltip' 
						title='Click to register'>
							<button  type="button" 
								className='btn btn-outline-secondary btn-sm regBtn'>
									Register
							</button></td>
				</tr>
			)
		}
	)

    return(
        <div className='schedule'>
            <table className='table table-striped'>
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
                    { DisplayData }
                </tbody>
                <tfoot><tr/></tfoot>
            </table>
             
        </div>
    )
 }


	// Get a properly formatted date range from passed 'start' and 'end' dates
	function getDateString(s,e) {
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
	function getShortMonthName(m) {
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

	// Return a full month name based the month passed
	/* function getFullMonthName(m) {
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
	} */
 
 export default JsonDataDisplay;