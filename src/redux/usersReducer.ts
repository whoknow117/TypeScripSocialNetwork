import {v1} from "uuid";
import {
    ActionTypes,
    FollowActionType,
    SetUsersActionType,
    UnFollowActionType,
    UsersPageType,
    UsersType
} from "../types/types";
import {act} from "react-dom/test-utils";


export const followAC = (userID: string):FollowActionType => {
    return {
        type: "FOLLOW",
        userID: userID
    }
}
export const unFollowAC = (userID: string):UnFollowActionType => {
    return {
        type: "UNFOLLOW",
        userID: userID
    }
}

export const setUsersAC = (users: Array<UsersType>):SetUsersActionType => {
    return {
        type: "SET-USERS",
        users: users
    }
}


let InitialState: UsersPageType =  {
    users: [
        {id: v1(),img:"https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg", fullName: 'Alex Gustafson', followed: false, status: 'Good Job', location: {city: 'Sever', country: "Ukraine"}},
        {id: v1(),img:"https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg", fullName: 'Пётр Осётр', followed: true, status: 'Грокнул redux', location: {city: 'Moscow', country: "Russia"}},
        {id: v1(),img:"https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg", fullName: 'King Pink', followed: false, status: 'Жизнь хороша :)', location: {city: 'Kiev', country: "Ukraine"}},
        {id: v1(),img:"https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg", fullName: 'Lev Leshenko', followed: false, status: 'Good Job', location: {city: 'Minsk', country: "Belarus"}},
    ]
}


const usersReducer = (state = InitialState, action: ActionTypes):UsersPageType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, users : state.users.map( u => u.id === action.userID ? {...u, followed : true} : u)}
        }
        case "UNFOLLOW": {
            return {...state, users : state.users.map( u => u.id === action.userID ? {...u, followed : false} : u)}
        }
        case "SET-USERS": {
            return {...state, users : [...state.users, ...action.users]}
        }

        default: return state;
    }
}

export default usersReducer;