import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
export const server = 'http://localhost:5000'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
