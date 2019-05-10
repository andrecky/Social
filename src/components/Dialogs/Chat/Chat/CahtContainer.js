import Messages from "./Chat";
import {connect} from "react-redux";
import {areaMessagesSendAction, getMessagesThunk, sendMessagesThunk} from "../../../../Redux/reducers/mssagesReducer";
import {withRouter} from "react-router-dom";
import {areaMailValueCreator, loginThunk} from "../../../../Redux/reducers/loginPageReducer";


const mstp = (state) => {

    return {
        messagesUsers: state.Messages.messagesUsers,
        sendMessages: state.Messages.sendMessages
    }
};

const mdtp = (dispatch) => ({

        getMessages(messages) {
            dispatch(getMessagesThunk(messages))
        },

        onChangeSendMessages(event) {
            dispatch(areaMessagesSendAction(event.currentTarget.value))
        },
        sendButtonMessages: (userId, body) => {
            dispatch(sendMessagesThunk( userId, body))
        },


    }
);


export default withRouter(connect(mstp, mdtp)(Messages))
