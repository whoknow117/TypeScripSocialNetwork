import {v1} from "uuid";
import {FollowActionType, UnFollowActionType, UsersPageType, UsersType} from "../types/types";


export const followAC = (isFollow: boolean):FollowActionType => {
    return {
        type: "FOLLOW",
        isFollow: isFollow
    }
}

export const unFollowAC = (isFollow: boolean):UnFollowActionType => {
    return {
        type: "UNFOLLOW",
        isFollow: isFollow
    }
}

let InitialState: UsersPageType =  {
    users: [
        {id: v1(),img:"https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg", fullName: 'Alex Gustafson', isFollow: false, status: 'Good Job', location: {city: 'Sever', country: "Ukraine"}},
        {id: v1(),img:"https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg", fullName: 'Пётр Осётр', isFollow: false, status: 'Грокнул redux', location: {city: 'Moscow', country: "Russia"}},
        {id: v1(),img:"https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg", fullName: 'King Pink', isFollow: false, status: 'Жизнь хороша :)', location: {city: 'Kiev', country: "Ukraine"}},
        {id: v1(),img:"https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg", fullName: 'Lev Leshenko', isFollow: false, status: 'Good Job', location: {city: 'Minsk', country: "Belarus"}},
    ]
}


const usersReducer = (state = InitialState, action: any):UsersPageType => {
    switch (action.type) {
        case "FOLLOW" : {
            return state;
        }
        case "UNFOLLOW": {
            return state;
        }

        default: return state;
    }
}

export default usersReducer;