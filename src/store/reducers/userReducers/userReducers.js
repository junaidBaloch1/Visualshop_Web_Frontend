import {UPDATE_LOGIN_DATA,USER_GOOGLE_AUTH} from '../../constants/userConstants/userConstants'
// States
const initialState = {
    access:null,
    timeAdded:null,

};

const updateLoginData=(state,action)=>{
    const newData={
        access:action.access,
        timeAdded:action.timeAdded
    }
    return {
        ...state,
        ...newData
    }
}



export const Update_Login_reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case UPDATE_LOGIN_DATA: return updateLoginData(state, action);
        default:
            return state;
    }
};

