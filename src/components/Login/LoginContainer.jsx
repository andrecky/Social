import {connect} from 'react-redux'
import Login from './Login';

import {
    areaMailValueCreator,
    areaPassCreator,
    captchaCreator,
    loginThunk,
    rememberMeCreator
} from "../../Redux/reducers/loginPageReducer";
import {authMeThunk} from "../../Redux/Auth/AuthReducer";



const mapStateToProps = (state) => {
    return {
        yo: 23232,
        email: state.LoginPage.email,
        password: state.LoginPage.password,
        isLoggedIn: state.LoginPage.isLoggedIn,
        captcha: state.LoginPage.captcha,
        captchaUrl: state.LoginPage.captchaUrl,
        rememberMe: state.LoginPage.rememberMe,
        captchaText: state.LoginPage.captchaText,
        isAuth: state.AuthPage.isAuth,
        me: state.AuthPage
    }
};

const mapDispatchToProps = (dispatch) => ({
    onChangeMailArea(event){
        dispatch(areaMailValueCreator(event.currentTarget.value))
    },//currentTarget-эвен событие в котором сидит текст ареа
    onChangePassArea: (event) => {
        let action = areaPassCreator(event.currentTarget.value);
        dispatch(action)//currentTarget-эвен событие в котором сидит текст ареа
    },
    onChangeCheckBox: (e) => {
        dispatch(rememberMeCreator(e.currentTarget.value));
        // console.log(e)
    },
    logGetIn: (email, password, rememberMe, captcha) => {
        dispatch(loginThunk(email, password, rememberMe, captcha));
    },
    onChangeCheckCaptcha(event){
        dispatch(captchaCreator(event.currentTarget.value))
    },
    giveInfo: () => dispatch(authMeThunk())
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);
