import React  from 'react';
import {changeNewMessageTextAC, sendMessageAC} from "../../../../redux/dialogReducer";
import Input from "./Input";



type InputPropsType = {



}

const SuperInputContainer = connect()(Input);

const InputContainer: React.FC<InputPropsType> = ( ) => {




    return (

                const dispatch = store.dispatch;



                const changeTextCallBack = (text: string) => {
                    dispatch(changeNewMessageTextAC(text))
                }

                const sendMessageCallback = () => {

                    dispatch(sendMessageAC(store.getState().dialogsPage.newMessageBody, dialogID))
                }

                return  <Input sendMessage={sendMessageCallback}
                               changeText={changeTextCallBack}
                               dialogsPage={store.getState().dialogsPage}   />

            }




    )
}

export default InputContainer;