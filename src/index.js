import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //App.js인데 생략한 것 (컴포넌트만 생략가능)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> 
    <App />
  // </React.StrictMode>
);

