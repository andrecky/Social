import React from 'react'
import {CSSTransition, TransitionGroup} from "react-transition-group";
import style from "../Dialogs/DialogsStyles/Dialog.module.css";
import img from '../../images/avaFallout.jpg'
import SimpleSlider from "../ProfilePage/Slider/Slider";
import {Wrapper} from "../ProfilePage/ProfileBlock/styles/ProfileStyled";
import Mamba from "./mamba";

const Test = (props) => {
    return (

        <div className={style.wrapper}>

            <SimpleSlider/>
            {alert(props.life)}

        </div>

    )
};
export default Mamba(Test)
