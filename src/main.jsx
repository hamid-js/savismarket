import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './general.css';
import HttpsRedirect from 'react-https-redirect';


ReactDOM.createRoot(document.getElementById('root')).render(
  <HttpsRedirect>
    <React.StrictMode>
      <App />
    </React.StrictMode> 
  </HttpsRedirect>,
);
