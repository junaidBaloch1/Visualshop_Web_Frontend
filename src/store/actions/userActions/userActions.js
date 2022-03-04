import {UPDATE_LOGIN_DATA} from '../../constants/userConstants/userConstants'
export const Update_Login_action = (access, timeAdded) => {
    return {
        type: UPDATE_LOGIN_DATA,
        access: access,
        timeAdded:timeAdded
    };
};



