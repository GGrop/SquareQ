import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import getFirestoreApp from './firebase/config';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// getFirestoreApp()
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
