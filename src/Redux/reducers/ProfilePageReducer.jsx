import {getUsersByIdRequest, StatusRequest, StatusRequestGet} from "../../dal/axios";

const ADD_POSTS = 'ADD_POSTS';
const TEXT_AREA_PHOTO_VALUE = 'TEXT_AREA_PHOTO_VALUE';
const ADD_PHOTO = 'ADD_PHOTO';
const TEXT_AREA_POSTS_VALUE = 'TEXT_AREA_POSTS_VALUE';

export const textAreaPostValueCreator = (value) => ({ type: TEXT_AREA_POSTS_VALUE, sym: value });
export const AddPostscreator = () => ({ type: ADD_POSTS });
// export const textAreaPhotoValueCreator = (value) => ({ type: TEXT_AREA_PHOTO_VALUE, symbol: value });
export const addPhotoCreator = () => ({ type: ADD_PHOTO });


export const TOGGLE_STATUS = 'TOGGLE_STATUS';
export const SET_STATUS_BY_ID = 'SET_STATUS_BY_ID';
export const SET_USER_BY_ID = 'SET_USER_BY_ID';
export const SET_STATUS = 'SET_STATUS';
export const setStatusCreater = (status) => ({type: SET_STATUS, status: status});
export const setUserByIdCreator = (data) => ({type: SET_USER_BY_ID, data: data});
export const setStatusById = (status) => ({type: SET_STATUS_BY_ID, status: status});
export const toggleCreator = () => ({type:TOGGLE_STATUS});

export const getUsersByIdThunk = (userId) => (dispatch) => {

    getUsersByIdRequest(userId)
        .then((resp) => {
            dispatch(setUserByIdCreator(resp.data))

        })
};

export const OnChangeStatusThunk = (values) => (dispatch, getState) => {
    let id = getState().AuthPage.userId;
    StatusRequest(values)
    .then(() => StatusRequestGet(id))
        .then((resp) => {
            dispatch(setStatusCreater(resp.data))
        })
};

export const GetStatusThunk = (id) => (dispatch) => {
    StatusRequestGet(id)
        .then((resp) =>
            dispatch(setStatusById(resp.data)))


};


export const getProfileThunk = (id) => (dispatch) => {


    dispatch(getUsersByIdThunk(id))

};


let initialStateForProfile = {
    status: null,
    posts: [],
    textAreaPostsValue: '',
    imgUrls: [],
    informationProfileBlock: {},
    editMode: false,
    isOwner: false,
    me: null,
    toggle: false
};


const ProfilePageReducer = (state = initialStateForProfile, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case ADD_POSTS:
            stateCopy.posts = [...state.posts, {text: stateCopy.textAreaPostsValue, name: 'guest'}];
            stateCopy.textAreaPostsValue = '';
            return stateCopy;
        case TEXT_AREA_POSTS_VALUE:
            stateCopy.textAreaPostsValue = action.sym;
            return stateCopy;
        case ADD_PHOTO:
            stateCopy.imgUrls = [...state.imgUrls, stateCopy.textAreaPostsValue];
            stateCopy.textAreaPostsValue = '';
            return stateCopy;
        case TEXT_AREA_PHOTO_VALUE:
            stateCopy.textAreaPhotoValue = action.symbol;
            return stateCopy;
        case SET_USER_BY_ID:
            return {...state, informationProfileBlock: action.data};
        case SET_STATUS:
            return {...state, status: action.status};
        case SET_STATUS_BY_ID:
        return{...state, status: action.status };
        case  TOGGLE_STATUS:
            return{...state, toggle : !state.toggle };
            default:
            return stateCopy;

    }
}
export default ProfilePageReducer;
