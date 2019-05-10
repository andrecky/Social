import React, {Component} from 'react';
import style from "./App.module.css";
import Navigation from "./Navigation";
import Login from "./components/Login/LoginContainer";
import {Route} from "react-router-dom";


class App extends Component {
    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.header}>
                    <Route path='/social' render={() => <Navigation/>}/>
                </div>
                <div className={style.wrapper}>
                    <Route path="/" exact render={() => <Login/>}/>

                </div>
            </div>
        );
    }
}

export default App;
