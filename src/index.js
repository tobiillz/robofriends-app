import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <h1>Hello World</h1>
    <h2>yestday is gone</h2>
    <App/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
