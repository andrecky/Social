import { combineReducers, createStore, applyMiddleware } from "redux";
import ProfilePageReducer from './Redux/reducers/ProfilePageReducer';
import DialogPageReducer from './Redux/reducers/dialogPageReducer';
import LoginPageReducer from "./Redux/reducers/loginPageReducer";
import AuthReducer from "./Redux/Auth/AuthReducer";
import thunk from 'redux-thunk';
import UsersReducer from "./Redux/reducers/UsersReducer";
import { reducer as formReducer } from 'redux-form';
import {composeWithDevTools} from "redux-devtools-extension";
import MessagesReducer from "./Redux/reducers/mssagesReducer";


const superReducer = combineReducers({
     ProfilePage: ProfilePageReducer,
     DialogsPage: DialogPageReducer,
     LoginPage: LoginPageReducer,
     AuthPage: AuthReducer,
     UsersPage: UsersReducer,
     form: formReducer,
     Messages: MessagesReducer,

});

const store = createStore(superReducer, composeWithDevTools(applyMiddleware(thunk)),);


export default store;
