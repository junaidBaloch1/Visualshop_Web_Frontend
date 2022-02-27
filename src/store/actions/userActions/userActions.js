import {UPDATE_LOGIN_DATA} from '../../constants/userConstants/userConstants'
export const updateLoginData = (access, timeAdded) => {
    return {
        type: UPDATE_LOGIN_DATA,
        access: access,
        timeAdded:timeAdded
    };
};



