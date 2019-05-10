import {FollowGet, FollowRequestPost, UnFollowRequest, UnFollowRequestPost, UsersRequest} from "../../dal/axios";
import {AuthMeAction, setUserInfo} from "../Auth/AuthReducer";


const SET_USERS = 'SET_USERS';
const SET_STATUS = 'SET_STATUS';
const FOLLOW_BOOL = 'FOLLOW_BOOL';

export const setUsers = (users) => ({type: SET_USERS, users});
export const setStatus = (status) => ({type: SET_STATUS, status});
const followAction = (bool, index) => ({type: FOLLOW_BOOL, bool, index});

export const statuses = {
    // NOT_INITIALIZED: 'NOT_INITIALIZED',
    // ERROR: 'ERROR',
    // INPROGRESS: 'INPROGRESS',
    // CAPTCHA_REQUIRED: 'CAPTCHA_REQUIRED',
    // SUCCESS: 'SUCCESS'
};

let initialState = {
    status: statuses.NOT_INITIALIZED,
    items: [],
    page: 1,
    data: null,


};

export const FollowThunk = (userId, index) => (dispatch) => {
    FollowRequestPost(userId)
        .then(resp => FollowGet(userId)
            .then(r => dispatch(followAction(r.data, index))
            )
        )
};

export const UnFollowThunk = (userId, index) => (dispatch) => {
    UnFollowRequest(userId)
        .then(resp => FollowGet(userId)
            .then(r => dispatch(followAction(r.data, index))
            )
        )
};

export const UsersThunk = () => async (dispatch, getState) => {

    let page = getState().UsersPage.page;
    dispatch(setStatus(statuses.INPROGRESS));
    let promise = await UsersRequest(7, page);
    dispatch(setStatus(statuses.SUCCESS));
    dispatch(setUsers(promise.data.items));
};

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS: {

            return {
                ...state,
                status: action.status
            }
        }
        case FOLLOW_BOOL: {
            let copyState = {...state};
            copyState.items = {...state.items,[action.index]:{...state.items[action.index],followed: action.bool}};
            let copy = Object.values(copyState.items);
            return {...state,items:copy}
        }

        case SET_USERS: {

            const copyState = {...state};
            for(let i = 0; action.users.length>i;i++){
                copyState.items.push(action.users[i]);
            }

            copyState.page = copyState.page+1;
            return {...state,items:copyState.items,page:copyState.page}
        }
        default: {
            return state
        }
    }
};

export default UsersReducer;
