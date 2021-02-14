import React from 'react';
import {changeNewMessageTextAC, sendMessageAC} from "../../../../redux/dialogReducer";
import Input from "./Input";
import {  StateType} from "../../../../redux/redux-store";
import {connect} from "react-redux";



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




const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);



export default InputContainer;