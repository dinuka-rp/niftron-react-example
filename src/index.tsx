import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NiftronConfig, NIFTRON } from "niftron-sdk";

const niftronConfig: NiftronConfig = {
  projectKey: "GDARTMGVSZDL7OZETKWBI32STTBIEJJVNK5PM2V4TV53CNAENXNGSES4",
  secretKey: process.env.REACT_APP_DEV_SECRET_KEY,
};

const niftron: NIFTRON = new NIFTRON(niftronConfig);

niftron.initialize()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
