import {connect} from 'react-redux'

import Dialog from './Dialog';
import {
    clearListFriendDialog,
    getDialogsUsersThunk,
    getMessagesThunk,
} from "../../../../Redux/reducers/mssagesReducer";

const mapStateToProps = (state) => {
    return {
        dialogsUsers: state.Messages.dialogUsers,


    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDialogsUsers() {
            dispatch(getDialogsUsersThunk());
        },

        getMessages(mesages) {
            dispatch(getMessagesThunk(mesages))
        },

        clearFriendsList() {
            dispatch(clearListFriendDialog())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
