import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import "./components/App.css";
import App from './components/App';
import Options from './components/Options'
// import Home from './components/Home'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <>
  <React.StrictMode>
    <App />
    <Options />
    {/* <Home  /> */}
  </React.StrictMode>,
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
