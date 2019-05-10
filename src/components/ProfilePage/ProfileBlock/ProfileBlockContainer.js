import {connect} from 'react-redux'
import ProfileBlock from './ProfileBlock'
import {
    addPhotoCreator, AddPostscreator,
    getProfileThunk,
    GetStatusThunk,
    OnChangeStatusThunk, textAreaPostValueCreator,
    toggleCreator
} from "../../../Redux/reducers/ProfilePageReducer";
import {withRouter} from "react-router";


const mapStateToProps = (state) => {

    return {
        textAreaPhotoValue: state.ProfilePage.textAreaPhotoValue,
        textAreaPostsValue: state.ProfilePage.textAreaPostsValue,
        informationProfileBlock: state.ProfilePage.informationProfileBlock,
        posts: state.ProfilePage.posts,
        imgUrls: state.ProfilePage.imgUrls,
        me: state.ProfilePage.me,
        editMode: state.ProfilePage.editMode,
        isOwner: state.ProfilePage.isOwner,
        toggle: state.ProfilePage.toggle,
        initialValuesProps: {
            aboutMe: 'only not alone',
        },
        status: state.ProfilePage.status,

    }
};

const mapDispatchToProps = (dispatch) => {

    return {

        getProfileThunk: (id) => {

            dispatch(getProfileThunk(id));
        },
        getProfileStatus: (id) => {
            dispatch(GetStatusThunk(id));
        },
        OnChangeStatus:
            (values) => {
                dispatch(OnChangeStatusThunk(values));
            },
        onButtonClickPosts:
            (type) => {
                let isText = type === 'text';
                if (isText) {
                    dispatch(AddPostscreator())
                } else {

                    dispatch(addPhotoCreator())
                }
            },
        onChangePostsArea:
            (event) => {
                let action = textAreaPostValueCreator(event.currentTarget.value);
                dispatch(action)//currentTarget-эвен событие в котором сидит текст ареа
            },
        toggleStatusSwitch:
            () => {
                dispatch(toggleCreator())
            }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileBlock));
