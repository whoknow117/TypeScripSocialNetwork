import React, {ChangeEvent} from 'react';
import {changeNewMessageTextAC, sendMessageAC} from "../../../../redux/dialogReducer";
import {ActionTypes} from "../../../../types/types";
import Input from "./Input";
import {RootStateType} from "../../../../redux/redux-store";
import StoreContext from "../../../../StoreContext";


type InputPropsType = {

    dialogID: string

}

const InputContainer: React.FC<InputPropsType> = ({dialogID }) => {




    return (
        <StoreContext.Consumer>
            {(store) => {

                const state = store.getState()
                const dispatch = store.dispatch;
                const dialogsPage = state.dialogsPage;
                const messages = state.dialogsPage.dialogs

                const value = state.dialogsPage.newMessageBody;

                const val = React.createRef<HTMLInputElement>()

                const changeTextCallBack = (text: string) => {
                    dispatch(changeNewMessageTextAC(text))
                }

                const sendMessageCallback = () => {

                    dispatch(sendMessageAC(  dialogID))
                }

                return  <Input sendMessage={sendMessageCallback}
                               changeText={changeTextCallBack}
                               dialogsPage={dialogsPage}   />

            }



            }
        </StoreContext.Consumer>
    )
}

export default InputContainer;