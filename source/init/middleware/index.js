// Core
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

const logger = createLogger({
    collapsed: true,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
    __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [sagaMiddleware];

if (__DEV__) {
    middleware.push(logger);
}

const enhancedStore = composeEnhancers(applyMiddleware(...middleware));

export { enhancedStore, sagaMiddleware };
