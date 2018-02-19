import { SET_MESSAGE, SET_HITBUTTON } from '../types/message';

const initState = {
    message: '',
    buttonHitCount: 0,
};

export default (state = initState, action) => {
    switch(action.type) {
        case SET_MESSAGE:
            return {
                ...state, 
                message: action.payload.message
            };
        case SET_HITBUTTON:
            return {
                ...state, 
                buttonHitCount: state.buttonHitCount * 2 + action.payload.buttonHitTimes
            };
        default:
            return state;
    };
};