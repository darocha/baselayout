import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import leftNavReducer from './leftnavigation.reducer';
import language from './language.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    leftNavigation: leftNavReducer,
    language: language
});

export default rootReducer;