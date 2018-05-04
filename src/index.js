import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore';
import rootReducer from './reducer/index';
import history from './History';

const store = configureStore(rootReducer);


// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter basename="/">
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
