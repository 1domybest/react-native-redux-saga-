import {createStore, applyMiddleware}  from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import {reducer} from './src/models/root-reducer'
import {handler as userSaga} from './src/models/user/sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(userSaga);

export {store};