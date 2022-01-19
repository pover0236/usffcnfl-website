import { config, CognitoIdentityCredentials, DynamoDB } from "aws-sdk";

config.update({ region: "us-east-1", });

config.credentials = new CognitoIdentityCredentials({
	IdentityPoolId: "us-east-1:63731e7d-6fe1-4073-9390-6b5ea777b0c3",
	RoleArn: "arn:aws:iam::063813534118:role/Cognito_DynamoPoolUnauth"
});

export default async function FetchData(){
	var docClient = new DynamoDB.DocumentClient();
	var params =  {
		TableName : "Schedule",
		IndexName : "ProgramIndex",
		KeyConditionExpression: "program = :p",
		ExpressionAttributeValues: {":p": "USFFC-NFL"}
	}
	
	const response = await docClient.query(params).promise()
	const data = response.Items
	return data;
};