import React from 'react';
import { NavLink } from "react-router-dom";
import style from './settingsStyle/styleSetings.module.css';
const Settings = () => {
    return (

        <div>
            <div className ={style.buttomBack}><NavLink to='/Profile' className={style.linkBack}>
                <button className={style.buttomBack} type='submit' >
                    back
                    </button>
            </NavLink>


                <span className={style.text}>Что делает рендер компонента Route?

У Route есть 3 props'a которые описывают каким образом выполнить рендер сопоставляя prop path с location.pathname и только один из prop должен быть представлен в Route:
ться независимо от того сопоставляется ли path или нет.</span>
            </div>
        </div>
    );



}
export default Settings;
