

import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {changeNewMessageTextAC, sendMessageAC} from "../../redux/dialogReducer";


let mapStateToProps = (state:StateType )  => {
    return {

        dialogsPage: state.dialogsPage
    }
}


let mapDispatchToProps = (dispatch: any) => {
    return {
        changeText: (text:string) => {

            dispatch(changeNewMessageTextAC(text))
        },
        sendMessage: (dialogID:string) => {

            dispatch(sendMessageAC(dialogID))
        }
    }
}

const DialogsContainer = connect()(Dialogs);


export default DialogsContainer;