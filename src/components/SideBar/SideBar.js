import {connect} from 'react-redux'
import React from 'react';
import {NavLink} from "react-router-dom";
import {MenuItems, Span, SpanIco, WrapperSideBar} from "./SideBarStyles/SideBarStyle";
import {Line} from "../Login/LoginStyle/LoginStyled";
import {
    FaComment,
    FaFileAlt,
    FaGamepad,
    FaHome,
    FaMusic,
    FaStream,
    FaUser
} from "react-icons/fa";

const SideBar = (props) => {
    return (
        <WrapperSideBar>
            <MenuItems>
                <NavLink to={`/social/profile/${props.id}`}>
                        <Span>
                            <SpanIco>
                                <FaHome />
                            </SpanIco>
                        МОЯ СТРАНИЦА
                         </Span>
                </NavLink>
                <NavLink to='/social/Users'>
                <Span>
                    <SpanIco>
                        <FaUser />
                    </SpanIco>
                        ДРУЗЬЯ
                    </Span>
                </NavLink>


                <NavLink to='/social/dialogs'>
                        <Span>
                            <SpanIco>
                                <FaComment />
                            </SpanIco>
                        СООБЩЕНИЯ
                            </Span>
                </NavLink>

                <Line>
                </Line>

                <NavLink to='/social/news'>
                        <Span>
                            <SpanIco>
                                <FaFileAlt />
                            </SpanIco>
                        НОВОСТИ
                            </Span>
                </NavLink>


                <NavLink to='/social/music'>
                          <Span>
                              <SpanIco>
                                  <FaMusic />
                              </SpanIco>
                        МУЗЫКА
                              </Span>
                </NavLink>


                <Line>
                </Line>
                <NavLink to='/social/setings'>
                     <Span>
                         <SpanIco>
                             <FaStream />
                         </SpanIco>
                    НАСТРОЙКИ
                         </Span>
                </NavLink>
                <NavLink to='/social/Testing'>
                     <Span>
                         <SpanIco>
                             <FaGamepad />
                         </SpanIco>
                    ИГРЫ
                         </Span>
                </NavLink>
            </MenuItems>
        </WrapperSideBar>

    );
}
const mapStateToProps = (state) => {
    return {
        id: state.AuthPage.userId
    }
}

export default connect(mapStateToProps)(SideBar);
