var AWS = require('aws-sdk');

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
};

docClient.query(params, onQuery);

function onQuery(err, data) {
	var months = [];
	if (err) {
		console.log("Error: /n " + err);
	} else {
		var classInfo = data["Items"];
		console.log(classInfo);
		for (i = 0; i < classInfo.length; i++) {
			var sDate = classInfo[i].startDate;
			var eDate = classInfo[i].endDate;
			var course = classInfo[i].courseName;
			var code = classInfo[i].code;
			var pform = classInfo[i].platform;
			var team = classInfo[i].team;
			var fleet = classInfo[i].fleet;
			var loc = classInfo[i].installation;
			var bldg = classInfo[i].bldg;
		};
	};
	return classInfo;
};


