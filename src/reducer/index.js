/**
 * Created by jph on 2018/4/26.
 */
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import {Register} from './register';
import {Login} from './login';

const rootReducer = combineReducers({
    routing: routerReducer,
    /* your reducers */
    Register,
    Login
});

export default rootReducer;