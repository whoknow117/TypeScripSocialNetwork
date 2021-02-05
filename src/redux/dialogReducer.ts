import {ActionTypes} from "../types/types";
import {v1} from "uuid";
import {DialogPageType, MessagesType} from "../types/types";





let initialState: DialogPageType = {

    dialogs: [
        {
            id: 'Dimas', name: 'Dimas',
            message: 'Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.',
            img: 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        },
        {
            id: 'Andre', name: 'Andre',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            img: 'https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
        },
        {
            id: 'Jana', name: 'Jana',
            message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            id: 'Ludovic', name: 'Ludovic',
            message: 'Lorem Ipsum начал как омлет, бессмысленные Латинской происходит от 1-го века до н.э. текст Цицерона De Finibus Bonorum et Malorum.',
            img: 'https://i1.wp.com/www.alphr.com/wp-content/uploads/2020/05/Zoom-How-to-Set-Profile-Picture.jpg?resize=1200%2C666&ssl=1'
        },
        {
            id: 'Sirena', name: 'Sirena',
            message: 'Классический «Lorem ipsum dolor sit amet…» проход отнести к ремиксов римского философа Цицерона 45 г. до н.э. текст De Finibus Bonorum et Malorum («О крайностями добра и зла») ',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgXGSWzxNteVrILpdCKpmTz_39LItE3ZFDHA&usqp=CAU'
        },
        {
            id: 'Lewis', name: 'Lewis',
            message: 'Классический «Lorem ipsum dolor sit amet…» проход отнести к ремиксов римского философа Цицерона 45 г. до н.э. текст De Finibus Bonorum et Malorum («О крайностями добра и зла») ',
            img: 'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528'
        },
        {
            id: 'Tony', name: 'Tony',
            message: 'Классический «Lorem ipsum dolor sit amet…» проход отнести к ремиксов римского философа Цицерона 45 г. до н.э. текст De Finibus Bonorum et Malorum («О крайностями добра и зла») ',
            img: 'https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg'
        },
        {
            id:'Donald', name: 'Donald',
            message: 'Классический «Lorem ipsum dolor sit amet…» проход отнести к ремиксов римского философа Цицерона 45 г. до н.э. текст De Finibus Bonorum et Malorum («О крайностями добра и зла») ',
            img: 'https://ak.picdn.net/shutterstock/videos/25017425/thumb/1.jpg'
        },
        {
            id: 'Travis sScott', name: 'Travis sScott',
            message: 'Классический «Lorem ipsum dolor sit amet…» проход отнести к ремиксов римского философа Цицерона 45 г. до н.э. текст De Finibus Bonorum et Malorum («О крайностями добра и зла») ',
            img: 'https://citydog.by/content/editor_images/2015/05_may/11_makeup/6.jpg'
        },
        {
            id: 'Comfy',
            name: 'Comfy',
            message: 'Мы сново хотим вас достать своими сообениями, на всеравно , что вы пытаетесь нас заблокировать. ',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsB4jIFuTn4Cvc1WvOxqUvpsx-kdwJ-UnkvQ&usqp=CAU'
        },
        {
            id: 'Max Holaway',
            name: 'Max Holaway',
            message: 'Классический «Lorem ipsum dolor sit amet…» проход отнести к ремиксов римского философа Цицерона 45 г. до н.э. текст De Finibus Bonorum et Malorum («О крайностями добра и зла») ',
            img: 'https://st.depositphotos.com/1773655/1376/i/950/depositphotos_13764564-stock-photo-young-mans-face-serious-expression.jpg'
        },
        {
            id: 'Donald Serone',
            name: 'Donald Serone',
            message: 'Классический «Lorem ipsum dolor sit amet…» проход отнести к ремиксов римского философа Цицерона 45 г. до н.э. текст De Finibus Bonorum et Malorum («О крайностями добра и зла») ',
            img: 'https://t2.gstatic.com/images?q=tbn:ANd9GcQtYtwAKK7oWheFhtb1cveMuE2sAGuRmVA2TBQZoAlcPZEbtYqgd9VRMKRPoFWH'
        },
    ],
    messages: {
        ['Dimas']: [
            {id: v1(), message: 'asdasd'},
            {id: v1(), message: 'hiadac'},
            {id: v1(), message: 'acsdci'},
            {id: v1(), message: 'asdc'},
            ],
        ['Andre']: [
            {id: v1(), message: 'asdasd'},
            {id: v1(), message: 'hiadac'},
            {id: v1(), message: 'acsdci'},
            {id: v1(), message: 'asdc'},
        ],
        ['Jana']: [
            {id: v1(), message: 'asdasd'},
            {id: v1(), message: 'hiadac'},
            {id: v1(), message: 'acsdci'},
            {id: v1(), message: 'asdc'},
        ],
        ['Ludovic']: [
            {id: v1(), message: 'asdasd'},
            {id: v1(), message: 'hiadac'},
            {id: v1(), message: 'acsdci'},
            {id: v1(), message: 'asdc'},
        ], ['Sirena']: [
            {id: v1(), message: 'asdasd'},
            {id: v1(), message: 'hiadac'},
            {id: v1(), message: 'acsdci'},
            {id: v1(), message: 'asdc'},
        ], ['Tony']: [
            {id: v1(), message: 'asdasd'},
            {id: v1(), message: 'hiadac'},
            {id: v1(), message: 'acsdci'},
            {id: v1(), message: 'asdc'},
        ], ['Lewis']: [
            {id: v1(), message: 'asdasd'},
            {id: v1(), message: 'hiadac'},
            {id: v1(), message: 'acsdci'},
            {id: v1(), message: 'asdc'},
        ], ['Donald']: [
            {id: v1(), message: 'asdasd'},
            {id: v1(), message: 'hiadac'},
            {id: v1(), message: 'acsdci'},
            {id: v1(), message: 'asdc'},
        ], ['Travis sScott']: [
            {id: v1(), message: 'asdasd'},
            {id: v1(), message: 'hiadac'},
            {id: v1(), message: 'acsdci'},
            {id: v1(), message: 'asdc'},
        ],
        ['Comfy']: [
            {id: v1(), message: 'asdasd'},
            {id: v1(), message: 'hiadac'},
            {id: v1(), message: 'acsdci'},
            {id: v1(), message: 'asdc'},
        ], ['Max Holaway']: [
            {id: v1(), message: 'asdasd'},
            {id: v1(), message: 'hiadac'},
            {id: v1(), message: 'acsdci'},
            {id: v1(), message: 'asdc'},
        ], ['Donald Serone']: [
            {id: v1(), message: 'asdasd'},
            {id: v1(), message: 'hiadac'},
            {id: v1(), message: 'acsdci'},
            {id: v1(), message: 'asdc'},
        ],








    },


    newMessageBody: '',

}


const dialogReducer = (state: DialogPageType = initialState, action: ActionTypes) => {


    if (action.type === 'CHANGE-NEW-MESSAGE-TEXT') {
        state.newMessageBody = action.message;

    } else if (action.type === 'SEND-MESSAGE') {

        let body = state.newMessageBody;
        const newMessage: MessagesType = {
            id: v1(),
            message: body,
        }
        state.messages[action.dialogID].push(newMessage)
        state.newMessageBody = ""
    }

    return state;
}

export const changeNewMessageTextAC = (text: string) => {

    return {
        type: 'CHANGE-NEW-MESSAGE-TEXT',
        message: text
    } as const
}

export const sendMessageAC = (body: string,dialogID: string) => {
    return {
        type: 'SEND-MESSAGE',
        body: body,
        dialogID: dialogID

    } as const
}


export default dialogReducer;