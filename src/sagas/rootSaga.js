import {all, call} from 'redux-saga/effects'
import userSaga from './userSaga'
export default function* rootSaga() {
    yield all ([
        call(userSaga)
    ])
}
