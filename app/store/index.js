import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import thunk from 'redux-thunk';
// 1
import { persistStore, persistReducer } from 'redux-persist';
// import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
// 2
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import rootSaga from '../sagas/index';
import rootReducer from '../reducers';

// import reduxLogger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage,
  // stateReconciler: hardSet,
  whitelist: ['user', 'restaurant', 'currentRestaurant'],
  // blacklist: ['todos'],
};
const history = createBrowserHistory();
const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
  // ...options
  level: 'log', // console's level 'log' | 'console' | 'warn' | 'error' |
});
let middlewares = [sagaMiddleware, routeMiddleware];
if (process.env.NODE_ENV === 'development') {
  middlewares = [sagaMiddleware, routeMiddleware, logger];
}
// const persistedState = loadState();
// middlewares.push(reduxLogger,thunk);
// middlewares.push(thunk);

const configureStore = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers/index', () => {
    const nextRootReducer = require('../reducers/index');
    configureStore.replaceReducer(nextRootReducer);
  });
}
const persistor = persistStore(configureStore);

export { history, configureStore, persistor };
