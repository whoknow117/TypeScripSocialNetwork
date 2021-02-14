import {v1} from "uuid";
import {UsersType} from "../types/types";


export const followAC = (isFollow: boolean) => {
    return {
        type: "FOLLOW",
        isFollow: isFollow
    }
}

export const unFollowAC = (isFollow: boolean) => {
    return {
        type: "UNFOLLOW",
        isFollow: isFollow
    }
}

let InitialState: Array<UsersType> = [
    {id: v1(),img:"https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg", fullName: 'Alex Gustafson', isFollow: false, status: 'Good Job', location: {city: 'Sever', country: "Ukraine"}},
    {id: v1(),img:"https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg", fullName: 'Пётр Осётр', isFollow: false, status: 'Грокнул redux', location: {city: 'Moscow', country: "Russia"}},
    {id: v1(),img:"https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg", fullName: 'King Pink', isFollow: false, status: 'Жизнь хороша :)', location: {city: 'Kiev', country: "Ukraine"}},
    {id: v1(),img:"https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg", fullName: 'Lev Leshenko', isFollow: false, status: 'Good Job', location: {city: 'Minsk', country: "Belarus"}},
]


const usersReducer = (state = InitialState, action: any):Array<UsersType> => {
    switch (action.type){

        default: return state;
    }
}

export default usersReducer;