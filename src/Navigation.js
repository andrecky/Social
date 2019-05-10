import React, {Component} from 'react';
import {Route} from "react-router-dom";
import SettingsBoss from './components/Settings/SettingsBoss';
import Login from './components/Login/LoginContainer';
import Testing from "./components/Testing/Testing";
import Switch from "react-router-dom/es/Switch";
import Header from "./components/Header/HeaderContainer";
import SideBar from "./components/SideBar/SideBar";
import style from "./App.module.css";
import Dialog from "./components/Dialogs/Chat/FriendsListDialog/DialogContainer";
import Chat from "./components/Dialogs/Chat/Chat/CahtContainer";
import Users from "./components/FriendPage/Users/UsersContainer";
import Music from "./components/musicPage/music";
import News from "./components/news/news";
import ProfileBlockContainer from "./components/ProfilePage/ProfileBlock/ProfileBlockContainer";
import Calculator from "./components/Calculator/AppCalculator";


const Navigation = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <Header/>
            </div>
            <div className={style.wrapper}>
                <SideBar/>
                <Switch>
                    <Route path="/social/profile/:id?" render={() => <ProfileBlockContainer/>}/>
                    <Route exact path='/social/users' render={() => <Users/>}/>
                    <Route exact path='/social/users/profile/:id?' component={ProfileBlockContainer}/>
                    <Route path="/social/dialogs" render={() => <Dialog/>}/>
                    <Route path='/social/chat/:id' render={() => <Chat/>}/>
                    <Route path="/social/news" render={() => <News/>}/>
                    <Route path="/social/music" render={() => <Music/>}/>
                    <Route path="/social/settings" render={() => <SettingsBoss/>}/>
                    <Route path="/social/calculator" render={() => <Calculator/>}/>
                    <Route path="/social/Testing" render={() => <Testing/>}/>
                </Switch>
            </div>
        </div>
    );
};

export default Navigation;
