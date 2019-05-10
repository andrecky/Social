import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./store";



// debugger




let render = () => {
     ReactDOM.render(
          <Provider store={store}><BrowserRouter >
               <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
          </BrowserRouter></Provider>, document.getElementById('root'));
}
render()
store.subscribe(render)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
