import Users from "./Users";
import {connect} from 'react-redux'
import {
    FollowThunk, UnFollowThunk,

    UsersThunk
} from "../../../Redux/reducers/UsersReducer";


const mapStateToProps = (state) => {
    debugger
    return {
        users: state.UsersPage.items,
        page:state.UsersPage.page,
        status: state.UsersPage.status,
        photos: state.UsersPage.items.photos

    }
};

const mapDispatchToProps = (dispatch) => ({
    getUsers: (n)=>{
        let thunk = UsersThunk(n);
        dispatch(thunk)
    },

    follow: (userId, index)=>{
        dispatch(FollowThunk(userId, index))
    },

    unFollow: (userId, index) => {
        dispatch (UnFollowThunk(userId, index))
    }
});






export default connect(mapStateToProps, mapDispatchToProps)(Users);
