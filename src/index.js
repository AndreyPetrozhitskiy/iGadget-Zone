import './style/index.scss'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import dropdowns from "./data";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));



const defaultState = dropdowns

const reducer = (state = defaultState , action) => {
    switch (action.type) {


        default:
            return state
    }

}
const store = createStore(reducer)

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
