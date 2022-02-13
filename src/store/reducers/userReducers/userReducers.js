import {UPDATE_LOGIN_DATA} from '../../constants/userConstants/userConstants'
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
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case UPDATE_LOGIN_DATA: return updateLoginData(state, action);
        default:
            return state;
    }
};
export default reducer;