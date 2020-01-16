import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';
// import initialState from './initialState.json'
import storeFactory from './store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './scss/index.scss';

localStorage.setItem("username", "Admin")
localStorage.setItem("password", "54321")


async function startApp() {

    let result = await axios.get("/initialState.json");
    const store = storeFactory(result.data)

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
        , document.getElementById('root'));
        
}

startApp()