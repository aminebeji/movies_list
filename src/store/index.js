import { createStore, applyMiddleware, combineReducers } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import * as reducers from './modules/reducers';


const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const combinedReducer = combineReducers(reducers);

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload // use previous state
        };

        return nextState;
    } else {

        return combinedReducer(state, action);
    }
};

const makeStore = () => {
    return createStore(
        reducer,
        bindMiddleware([ thunkMiddleware ])
    );
};

export const wrapper = createWrapper(makeStore, { debug: false });
