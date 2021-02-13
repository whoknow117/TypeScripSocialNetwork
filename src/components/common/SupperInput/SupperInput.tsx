import React, { DetailedHTMLProps, TextareaHTMLAttributes} from 'react'
import {ActionTypes} from "../../../types/types";



type DefaultInputTypes = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
export type SupperInputPropsType = DefaultInputTypes & {
    dispatch?: (action: ActionTypes) => void
    onEnter?: () => void
    error?: string
    action?: ActionTypes

}




const SupperInput: React.FC<SupperInputPropsType> = ({
                                                         dispatch,
                                                         error,

                                                         onEnter,
                                                         onChange,
                                                         action,
                                                        ...restProps
                                                     }) => {
    let postMessageRef  = React.createRef<HTMLTextAreaElement>();

    const onChangeTextCallBack = () => {


         }


    return <textarea  onChange={onChangeTextCallBack} ref={postMessageRef} {...restProps}></textarea>
}

export default SupperInput;