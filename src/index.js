import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";

//let store = createStore(reducer);

//STORE - GLOBALIZED STATE

//ACTION
const increment = () => {
    return {
        type: "INCREMENT" //this is the name of my action
    }
}

const decrement = () => {
    return {
        type: "DECREMENT" //this is the name of my another action
    }
}

//REDUCER

//DISPATCH



ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
