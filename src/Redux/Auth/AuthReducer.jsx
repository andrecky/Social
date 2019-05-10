import {authMeRequest, logOutRequest} from "../../dal/axios";
import {getUsersByIdThunk} from "../reducers/ProfilePageReducer";

let CAPTCHA_OUT = 'CAPTCHA_OUT';
const captchaFalgOutCreator = () => ({type: CAPTCHA_OUT});
const SET_IS_AUTH = 'SET_IS_AUTH';
const SET_USER_INFO = 'SET_USER_INFO';
export let AuthMeAction = (value, id) => ({type: SET_IS_AUTH, value, id});
export const setUserInfo = (userId, userName) => ({type: SET_USER_INFO, userId, userName});


export const authMeThunk = () => (dispatch) => {
    let promise = authMeRequest();
    promise.then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(AuthMeAction(true, response.data.data.id));
        }
    });
};

export const logOutThunk = () => (dispatch) => {
    let promise = logOutRequest();
    promise.then(() => {
        dispatch(AuthMeAction(false));
        dispatch(captchaFalgOutCreator());
    })
};

let initialState = {
    isAuth: false,
    userId: null,
    name: 'Andrey',
    avatar: 'http://asdfasfsafasfas.jpg',
    isLoggedIn: false

};
const AuthReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case SET_IS_AUTH:
            stateCopy.userId = action.id;
            stateCopy.isAuth = action.value;
            return stateCopy;

        case CAPTCHA_OUT:
            return {...state, captcha: false};
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    userId: action.userId,
                    userName: action.userName
                }
            };

        default:
            return state;
    }
};
export default AuthReducer;
