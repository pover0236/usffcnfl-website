import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//@ts-ignore
import 'bootstrap/dist/js/bootstrap.min';

import 'bootstrap/dist/css/bootstrap.min.css';
//import reportWebVitals from './reportWebVitals';

import './index.css';

import App from './App';

import * as AWS from 'aws-sdk'

AWS.config.update({ region: "us-east-1", });

AWS.config.credentials = new AWS.CognitoIdentityCredentials({
	IdentityPoolId: "us-east-1:63731e7d-6fe1-4073-9390-6b5ea777b0c3",
	RoleArn: "arn:aws:iam::063813534118:role/Cognito_DynamoPoolUnauth"
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
