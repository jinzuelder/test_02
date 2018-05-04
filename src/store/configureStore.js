import { createStore, applyMiddleware ,compose} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
//import rootReducer from '.././reducers/index';

const logger = createLogger({ collapsed: true });

// 创建一个中间件集合
const middleware = [thunk,logger];

const configureStore = compose(
    applyMiddleware(...middleware)
)(createStore);

export default configureStore;