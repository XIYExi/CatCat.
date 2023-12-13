import React, {useRef} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from 'react-router-dom';
import router from "./router";
import {Provider} from "mobx-react";
import store from "./store";



function WrapperApp(){
    return(
        <div>
            <Provider {...store}>
                {/*pages*/}
                <RouterProvider router={router} />
            </Provider>
        </div>
    )
}

const App = WrapperApp;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
