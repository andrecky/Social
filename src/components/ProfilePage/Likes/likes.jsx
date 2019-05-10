import React, {useState} from 'react';
import withRouter from "react-router-dom/es/withRouter";
import { Likes } from "../ProfileBlock/styles/ProfileStyled";
import {FaHeart} from "react-icons/fa";

const LikesUp = () => {
    const [count, setCount] = useState(0);

    return (
        <Likes>
            <p>{ count }</p>
            <button
                onClick={()=> setCount(count +1)}>

                    <FaHeart />

            </button>
        </Likes>


    )
};

export default withRouter(LikesUp)
