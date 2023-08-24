import { SET_USER } from "../actions/actionType";

const INITIAL_STATE = {
    user: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) { //like post and increment it by 1
        case SET_USER:
            return {
                ...state,
                user: action.user,
            };
        default:
            return state; //update te new state otherwise return the existing actual state 
    }
};

export default userReducer;
//stateUpdater
