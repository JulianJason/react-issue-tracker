import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import sagaWatcher from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(sagaWatcher);
    return store;
}
