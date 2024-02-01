import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './general.css';
import HttpsRedirect from 'react-https-redirect';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HttpsRedirect>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </HttpsRedirect>,
);
