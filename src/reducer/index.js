/**
 * Created by jph on 2018/4/26.
 */
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import {Register} from './register';
import {Login} from './login';
import {Mainpage} from './mainpage';

const rootReducer = combineReducers({
    routing: routerReducer,
    /* your reducers */
    Register,
    Login,
    Mainpage
});

export default rootReducer;