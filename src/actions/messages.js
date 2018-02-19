import { SET_MESSAGE, SET_HITBUTTON } from '../types/message';
export const setMessage = (message) => {
  return dispatch => {
    dispatch({
        type: SET_MESSAGE,
        payload: {
          message
        }
    });
  };
};

export const hitButton = (buttonHitTimes) => {
  return dispatch => {
    dispatch({
        type: SET_HITBUTTON,
        payload: {
          buttonHitTimes
        }
    });
  };
};
