import Users from "./Users";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {followAC, unFollowAC} from "../../redux/usersReducer";




let mapStateToProps = (state:StateType )  => {
    debugger;
    return {

        users: state.usersPage.users
    }
}


let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userID:string) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: string) => {
            dispatch(unFollowAC(userID))
        }
    }
}


const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);


export default UsersContainer;