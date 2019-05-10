import {connect} from 'react-redux'
import Header from './Header';


import {authMeThunk, logOutThunk} from "../../Redux/Auth/AuthReducer";

const mapStateToProps = (state) => {
    return {
        isLoggedOut: state.LoginPage.isLoggedIn,
        isAuth: state.AuthPage.isAuth
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        loginOut:
            () => dispatch(logOutThunk()),

        giveInfo:
            () => dispatch(authMeThunk())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
