import {takeEvery} from 'redux-saga/effects'
import {GET_ALL_USER_INFO_REQUEST} from './actions'

function* handler () {
    yield takeEvery(GET_ALL_USER_INFO_REQUEST, getAllUserInfo);
}


function getAllUserInfo (action) {
    try {
        // API 요청하는곳
    } catch (err) {
        // 에러 핸들링
    }
}

export {handler};