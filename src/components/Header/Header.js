import React from 'react';
import logo from '../../images/logo_foll.png';
import {withRouter} from "react-router-dom";
import {Redirect} from 'react-router';
import {Button, Logo, Wrapper} from "./HeadrStyles/HeaderStyled";
import { FaDoorOpen } from "react-icons/fa";
import {useEffect} from "react-with-hooks";


const Header   =(props) => {

    useEffect(()=>{
        props.giveInfo();
    },[]);

        let redirectObj = {
            pathname: '/',
            state: {
                from: props.location.pathname
            }
        };

        if (!props.isAuth) {
            return <Redirect to={redirectObj}/>
        }
        console.log(props.isAuth);
        return (
            <Wrapper>
                <Logo src={logo}/>
                <Button
                    onClick={props.loginOut}
                    type='submit'>
                    <FaDoorOpen />
                </Button>
            </Wrapper>
        );

}
export default withRouter(Header);
