import * as AWS from 'aws-sdk';

var docClient = new AWS.DynamoDB.DocumentClient();

export const getSchedule = (tableName) => {
    var params = {
        TableName: Schedule
    }

    docClient.scan(params, function (err, data) {
        if (!err) {
            console.log(data)
        }
    })
}

