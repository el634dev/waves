import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ResultContextProvider } from './context/ResultContextProvider';

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
    <ResultContextProvider>
        <Router>
          <App />
        </Router>
    </ResultContextProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
