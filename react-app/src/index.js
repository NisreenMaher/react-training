import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppClass from './AppClass';
import NewApp from './NewApp';
import EventsComponent from './EventsComponent';
// import FormComponent from './components/FormComponent';
import HttpRequestComponent from './components/HttpRequestComponent';
import HomePage from './HomePage';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    // <App />,
    // <AppClass name="Ahmed"/>,
    // <NewApp name="Ali"/>,
    // <EventsComponent />,
    // <FormComponent />,
    // <HttpRequestComponent/>,
    <HomePage/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
