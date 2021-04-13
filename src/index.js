import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Kagency from './Kagency';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import 'jquery/dist/jquery.min.js';

ReactDOM.render(
  <React.StrictMode>
    <Kagency/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
