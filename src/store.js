import { createStore, combineReducers, applyMiddleware } from 'redux';
import messageReducer from './reducers/message';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    messageReducer
});

export default createStore(
    reducer,
    applyMiddleware(thunk)
);