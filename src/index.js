import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// To use routing logic within app, we must import Web App Router into the project
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    {/* to enable React Router to control and manage all URLs, wrap router around the application */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
