import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './fonts/SFMono/SFMono-Regular.ttf';
import './fonts/Calibre/Calibre-Regular.ttf';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div className="Credits"><span>Design and Built by A.Sai Tarun</span></div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

