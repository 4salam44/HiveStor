import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

// إضافة padding-top للـ main-content بسبب الـ fixed header
const style = document.createElement('style');
style.textContent = `
  .main-content {
    padding-top: 80px;
  }
`;
document.head.appendChild(style);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 