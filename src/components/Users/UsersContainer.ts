import Users from "./Users";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";




let mapStateToProps = (state:StateType )  => {
    debugger;
    return {

        users: state.usersPage.users
    }
}


let mapDispatchToProps = (dispatch: any) => {
    return {

    }
}


const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);


export default UsersContainer;