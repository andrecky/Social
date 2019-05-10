import React from 'react'
import {CSSTransition, TransitionGroup} from "react-transition-group";
import style from "../Dialogs/DialogsStyles/Dialog.module.css";
import img from '../../images/avaFallout.jpg'

const Test = () => {
    return (
        <TransitionGroup>
        <div className={style.wrapper}>

            <CSSTransition calssName={style.option}>
                <img src={img} />
            </CSSTransition>

        </div>
        </TransitionGroup>
    )
};
export default Test
