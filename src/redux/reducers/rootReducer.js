import tvshowsReducer from './tvshowsReducer';
import uiReducer from './uiReducer';
import { combineReducers } from 'redux';

export default combineReducers({ tvshowsReducer, uiReducer });
