
import {addPostAC, changeNewTextAC} from "../../../redux/profileReducer";
import { StateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import Content from "./Content";





let mapStateToProps = (state:StateType) => {
    return {
        profilePage: state.profilePage,
        posts: state.profilePage.posts,
        value: state.dialogsPage.newMessageBody
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (text: string) => {

            dispatch(changeNewTextAC( text))
        },
        addNewPost: () => {
            dispatch(addPostAC())
            }
    }
}

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content)

export default ContentContainer;