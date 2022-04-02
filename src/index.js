import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import ReactDom from 'react-dom/client'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<App/>)
// ReactDOM.render(<App />,document.getElementById('root'));

reportWebVitals();
