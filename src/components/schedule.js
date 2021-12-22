var AWS = require('aws-sdk')

AWS.config.update({
	region: 'us-east-1',
	endpoint: 'http://192.168.0.17:8000'
});

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
	TableName : "Schedule",
	IndexName : "ProgramIndex",
	KeyConditionExpression: "program = :p",
	ExpressionAttributeValues: {
		":p": "USFFC-NFL"
	}
};

docClient.query(params, function(err, data) {
	if (err) {
		console.log('Unable to query. Error: ', JSON.stringify(err, null, 2));
	} else {
		console.log('Query succeeded.');
		data.Items.forEach(function(item) {
			console.log(item.startDate + ',' 
				+ item.endDate + ',' 
				+ item.team + ', ' 
				+ item.courseName);
		});
	}
});

