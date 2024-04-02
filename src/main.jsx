import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './general.css';
import HttpsRedirect from 'react-https-redirect';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HttpsRedirect>
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  </HttpsRedirect>,
);
