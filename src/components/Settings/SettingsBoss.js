import Settings from './Settings';
import SideBar from "../SideBar/SideBar";
import Header from "../Header/HeaderContainer";
import React from 'react';
import style from '../../App.module.css';

const SettingsBoss = () =>{
    return(
<div className={style.header}>
            <Header />
            <div className={style.wrapper}>
                <SideBar />
                <Settings />
            </div>
        </div>
    );
}
export default SettingsBoss;
