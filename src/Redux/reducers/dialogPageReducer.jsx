export const ADD_MESSAGES = 'ADD_MESSAGES';
export const TEXT_AREA_MESSAGES_VALUE = 'TEXT_AREA_MESSAGES_VALUE';
export const ADD_USER = 'ADD_USER';
export const TEXT_AREA_USERS_VALUE = 'TEXT_AREA_USERS_VALUE';

export const addMessagesCreator = () => ({type: ADD_MESSAGES})
export const textAreaMessagesValueCreator = (value) => ({type: TEXT_AREA_MESSAGES_VALUE, symbol: value})
export const addUserCreator = () => ({type: ADD_USER})
export const textAreaUserValueCreator = (value) => ({type: TEXT_AREA_USERS_VALUE, symbol: value})

let initialStateForDialog = {
    names: [
        {
            id: 'cD1', key: '1',
            name: 'Tom Hanks'
        },
        {
            id: 'cD2', key: '2',
            name: 'Richard gir'
        },
        {
            id: 'cD3', key: '3',
            name: ' nicolas cage'

        },
        {
            id: 'cD4', key: '4',
            name: 'natalie portman'
        },
        {
            id: 'cD5', key: '5',
            name: 'Richard gir'
        },
        {
            id: 'cD6', key: '6',
            name: 'johnny depp'

        }
    ],
    textAreaUsersValue: '',
    textAreaIDValue: '',
    textAreaKeyValue: '',
    messages: [],
    textAreaMessagesValue: '',
    currentRememberMe: ''
};
const DialogPageReducer = (state = initialStateForDialog, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case ADD_MESSAGES:
            stateCopy.messages.push(
                {text: stateCopy.textAreaMessagesValue, name: 'Nikolas'});
            stateCopy.textAreaMessagesValue = '';
            return stateCopy;
        case TEXT_AREA_MESSAGES_VALUE:
            stateCopy.textAreaMessagesValue = action.symbol;
            return stateCopy;
        case ADD_USER:
            stateCopy.names.push(
                {
                    name: stateCopy.textAreaUsersValue,
                    id: stateCopy.textAreaIDValue,
                    key: stateCopy.textAreaKeyValue
                }
            );
            stateCopy.textAreaUsersValue = '';
            stateCopy.textAreaIDValue = '';
            stateCopy.textAreaKeyValue = '';
            return stateCopy;

        case TEXT_AREA_USERS_VALUE:

        let guid=()=> {
            let s4=()=> {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }

            return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`
        }

            stateCopy.textAreaUsersValue = action.symbol;
            stateCopy.textAreaIDValue = guid();
            stateCopy.textAreaKeyValue = guid();
            return stateCopy;

        default:
            return stateCopy;


    }
}
export default DialogPageReducer;