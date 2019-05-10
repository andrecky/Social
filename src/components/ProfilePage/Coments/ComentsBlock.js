import React from 'react';
import Depp from '../../../images/coments_ava.gif';
import style from './comentsStyle/comentsStyle.module.css';

const ComentsBlock = (props) => {
    return (

        <div className={style.styleMesageComent}>
            <h4>{props.name}</h4>
            <img className={style.ava} src={Depp} />
            {props.text}
        </div>

    );
}

export default ComentsBlock;