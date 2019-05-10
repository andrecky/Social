import React from 'react';
import logo from '../../images/logo_foll.png';
import {Redirect} from 'react-router';
import withRouter from "react-router-dom/es/withRouter";
import {
    Auntification,
    Background,
    ButtonLogin,
    CaptchaInput,
    ImgCaptcha,
    InputMailPass,
    Line,
    Logo,
    RememberInput,
    RememberMe,
    Wrapper
} from "./LoginStyle/LoginStyled";
import {useEffect} from "react-with-hooks";

const Login = (props) => {
    useEffect(() => {
        props.giveInfo();
    }, []);
    if (props.isAuth) {
        let redirectTo = !!props.location.state
        && !!props.location.state.from
            ? props.location.state.from
            : `social/profile/${props.userId}`;
        return <Redirect to={redirectTo}/>
    }
    return (
        <>
            <Background>
                <Wrapper>
                    <Logo src={logo}/>
                    <InputMailPass
                        type='email'
                        value={props.email}
                        placeholder='Email'
                        onChange={(b) => {
                            props.onChangeMailArea(b)
                        }}
                    />
                    <InputMailPass
                        value={props.password}
                        type='password'
                        placeholder='Password'
                        onChange={(a) => {
                            props.onChangePassArea(a);
                        }}
                    />
                    {props.captcha ? <CaptchaInput>
                        <ImgCaptcha src={props.captchaUrl}/>
                        <input
                            type='text'
                            value={props.captchaText}
                            onChange={(el) => {
                                props.onChangeCheckCaptcha(el)
                            }
                            }
                        />
                    </CaptchaInput> : ''}
                    <RememberMe>
                        <RememberInput
                            type='checkbox'
                            value='Rem'
                            onChange={(event) => {
                                props.onChangeCheckBox(event);
                            }}
                        />
                        <label htmlFor='Rem_input'>
                            {`  Remember me`}
                        </label>
                        <ButtonLogin
                            onClick={() => {
                                props.logGetIn(
                                    props.email,
                                    props.password,
                                    props.rememberMe,
                                    props.captchaText)
                            }}
                            type='submit'>
                            ВОЙТИ
                        </ButtonLogin>
                    </RememberMe>
                    <Auntification>
                        {` Registration`}
                        <Line/>
                        {`Login`}
                    </Auntification>
                </Wrapper>
            </Background>
        </>
    )

}

export default withRouter(Login);


