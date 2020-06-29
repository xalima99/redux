import { combineReducers } from 'redux';

import postReducer from './postsreducer';
import userReducer from './userReducer';

export default combineReducers({
    posts: postReducer,
    user: userReducer
})