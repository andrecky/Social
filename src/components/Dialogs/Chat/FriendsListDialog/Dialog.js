import React, { useEffect } from 'react';

import {FotoAllUsers, H3, Header, ListName, NameBlock, NameSpan, Wrapper} from "../../DialogsStyles/DialogStyled";
import {NavLink} from "react-router-dom";
import style from '../../DialogsStyles/Dialog.module.css';
import {UrlImg} from "../../../FriendPage/Users/Users";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Dialog = (props) => {
    useEffect(() => props.getDialogsUsers(), []);
    useEffect(() => {return props.clearFriendsList()}, []);

    return (<Wrapper>
            <Header>
                <H3>Поиск</H3>
                <input placeholder=" Введите Имя"/>
            </Header>
            <ListName>
                {console.log(props.dialogsUsers)}

                {props.dialogsUsers.length === 0 ? '' : props.dialogsUsers.map((e) => {
                    return <NameBlock>
                        <NavLink to={`/social/chat/${e.userId}`}>
                            <FotoAllUsers
                                src={e.photos.small === null ? UrlImg : e.photos.small}/>
                            <NameSpan> {e.fullName}</NameSpan>
                        </NavLink>
                        <div>
                        </div>
                    </NameBlock>

                })}




            </ListName>
        </Wrapper>
    );
};

export default Dialog;
