import {
    captchaRequest,
    loginRequest,} from "../../dal/axios";
import {AuthMeAction} from "../Auth/AuthReducer";
export const AREA_MAIL_VALUE = 'AREA_MAIL_VALUE';
export const AREA_PASSWORD_VALUE = 'AREA_PASSWORD_VALUE';
export const REMEMBER_USER = 'REMEMBER_USER';
const CAPTCHA = 'CAPTCHA';
const CAPTCHA_FLAG = 'CAPTCHA_FLAG';

export const rememberMeCreator = (rememberMe) => ({type: REMEMBER_USER, rememberMe});
export const areaMailValueCreator = (sym) => ({type: AREA_MAIL_VALUE, sym});// (value)sym: value
export const areaPassCreator = (value) => ({type: AREA_PASSWORD_VALUE, symbol: value});
export const captchaCreator = (text) => ({type: CAPTCHA, text});
const captchaFlag = (url) => ({type: CAPTCHA_FLAG, url});

export const loginThunk = (email, password, rememberMe, captcha) => (dispatch,) => {
    let promise = loginRequest(email, password, rememberMe, captcha);
    promise.then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(AuthMeAction(true));
        } else if (response.data.resultCode === 1) {
            alert(response.data.messages[0])
        }
        else {
            captchaRequest().then((done) => {
                dispatch(captchaFlag(done.data.url));
                console.log(done)
            })
        }
    })
        .catch(error => console.log(error))
};


let initialStateForLoginPage = {
    email: 'tooreckky@gmail.com',
    password: 'Gg6243646',
    rememberMe: true,
    captchaText: '',
    captcha: false,
    captchaUrl: '',
    isLoggedIn: false,

};
const LoginPageReducer = (state = initialStateForLoginPage, action) => {
    let stateCopy;
    switch (action.type) {
        case CAPTCHA:
            stateCopy = {...state};
            stateCopy.captchaText = action.text;
            return stateCopy;
        case CAPTCHA_FLAG:
            return {...state, captcha: true, captchaUrl: action.url};
        case AREA_MAIL_VALUE:
            stateCopy = {...state, email: action.symbol};
            return stateCopy;
        case AREA_PASSWORD_VALUE:
            stateCopy = {...state};
            stateCopy.password = action.symbol;
            return stateCopy;
        case REMEMBER_USER:
            return {...state, rememberMe: action.rememberMe};
        default:
            return state;

    }
};
export default LoginPageReducer
