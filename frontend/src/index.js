import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <script src="https://unpkg.com/react/umd/react.production.min.js"></script>

<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>

<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></script>

<script>var Alert = ReactBootstrap.Alert;</script>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
