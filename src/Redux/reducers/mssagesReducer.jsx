import {getDialogs, getMessages, getUsersByIdRequest, sendMessage, UsersRequest} from "../../dal/axios";
import {setStatus, setUsers, statuses} from "./UsersReducer";
import {getUsersByIdThunk, SET_USER_BY_ID, setStatusCreater, setUserByIdCreator} from "./ProfilePageReducer";
import {AREA_MAIL_VALUE} from "./loginPageReducer";

const DIALOGS_GET_USERS = 'DIALOGS_GET_USERS';
const MESSAGES_GET_USERS = 'MESSAGES_GET_USERS';
const CURRENT_USER_BY_ID = 'CURRENT_USER_BY_ID';
const CLEAR_LIST_FRIENDS_MESSAGES = 'CLEAR_LIST_FRIENDS_MESSAGES';
const SEND_MESSAGES = 'SEND_MESSAGES';

const dialogUsersAction = (users) => ({type: DIALOGS_GET_USERS, users });
const messagesAction = (messages) => ({type: MESSAGES_GET_USERS, messages});
export const clearListFriendDialog = () => ({type: CLEAR_LIST_FRIENDS_MESSAGES});

export const areaMessagesSendAction = (value) => ({type: SEND_MESSAGES, sym: value});


let initialStateForLoginPage = {
   dialogUsers: [],
    messagesUsers: [],
    setCurrentUsers: {},
    // sendMessages: ''
};


export const getDialogsUsersThunk = () => async (dispatch) =>
{
   let promise = await getDialogs();
        for (let i=0;i<promise.data.length;i++){
            const promise2 = await getUsersByIdRequest(promise.data[i].id);

            dispatch(dialogUsersAction(promise2.data))
        }
};



export const getMessagesThunk = (userId) => (dispatch) =>
{debugger
    let promise = getMessages(userId);
     promise.then((resp)=>{
         console.log(resp.data);
         dispatch(messagesAction(resp.data.items))
     })

};
export const sendMessagesThunk = (userId, body) => (dispatch) =>
{
  sendMessage (userId, body)
      .then(()=>{
          dispatch(getMessagesThunk(userId))
      })
};


// // обновить\зарефрешить конкретного собеседника (userId), чтобы этот собеседник был вверху списка собеседников
// function updateDialog(userId) {
//     axiosInstance.put(`dialogs/${userId}`)
//         .then(res => console.log(res.data));
// }
//
// // просмотрено ли моё сообщение моим собеседником
// function isViewed(messageId) {
//     axiosInstance.get(`dialogs/messages/${messageId}/viewed`)
//         .then(res => console.log(res.data));
// }
//
// // пометить сообщение как СПАМ
// function setSpamStatus(messageId) {
//     axiosInstance.post(`dialogs/messages/${messageId}/spam`)
//         .then(res => console.log(res.data));
// }
//
// // удалить сообщение (удаляется только для удаляющей стороны, для собеседника сообщение не удаляется)
// function deleteMessage(messageId) {
//     axiosInstance.delete(`dialogs/messages/${messageId}`).then(r => {
//         console.log(r.data);
//     });
// }
//
// // восстановить удалённое сообщение (автоматически оно перестаёт ещё и быть спамом, если было отмечено как спам)
// function restoreMessage(messageId)
// {
//     axiosInstance.put(`dialogs/messages/${messageId}/restore`)
//         .then(res => console.log(res.data));
// }
//
// // получить сообщения из переписки с конкретным собеседником, сообщения, которые новее переданной даты
// // return http://prntscr.com/n6nrug
// function checkNewMessages(userId, date) {
//     axiosInstance.get(`dialogs/${userId}/messages/new?newerThen=${date}`).then(r => {
//         console.log(r.data);
//     });
// }
//
// // получить число всех непрочитанных (новых) сообщений
// function newMessagesCount() {
//     axiosInstance.get(`dialogs/messages/new/count`).then(r => {
//         console.log(r.data);
//     });
// }

const MessagesReducer = (state = initialStateForLoginPage, action) =>
{
    switch (action.type) {
        case DIALOGS_GET_USERS:
            let copyState = {...state};
            copyState.dialogUsers = [...state.dialogUsers,action.users];
            return copyState;
        case MESSAGES_GET_USERS:
            return {...state, messagesUsers:action.messages};
        case CURRENT_USER_BY_ID:
            return {...state, setCurrentUsers: action.data};
        case CLEAR_LIST_FRIENDS_MESSAGES:
            return {...state, dialogUsers:[]};
        case SEND_MESSAGES:
            return {...state, sendMessages: action.sym};
        default:
            return state;
    }
};
export default MessagesReducer
