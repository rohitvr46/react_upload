import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes , Switch,Route} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <React.StrictMode> 
    <Router>  
    <App/> 
    </Router> 
  </React.StrictMode>
  </div>
);


reportWebVitals();
