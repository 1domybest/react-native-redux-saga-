import {all, fork, takeLatest,call,put, take} from 'redux-saga/effects';
import {logInRequest} from "../actions/userAction";
import {USER_ACTION_TYPE} from "../actions/actionTypes";
import axios from 'axios'

// const loginApi = (params) =>  // 서버에서 api 호출 하는 함수
//     axios.post("http://localhost:8088/api/common/getEditorList", params)
//         .then(res => res.data.data.content[0]).catch(function(err) {
//         console.log(err);
//     });

const loginApi = (params) =>
    axios
        .post("http://localhost:8088/api/common/getEditorList", params)
        .then(response => response.data.data.content[0])
        .catch(err => {
            throw err;
        });

function* login() {
    try {
        let params = {}
        params['productionRangeKeywordList'] = []
        params['searchKeyword'] = ''
        params['currentPage'] = 0
        params['limit'] = 9
        params['orderBy'] = 'regDate'

        const user = yield call(loginApi, params); // call = function 호출
        console.log(user)
        yield put({ // put == dispatch
            type: USER_ACTION_TYPE.USER_LOG_IN_SUCCESS, user
        })
    } catch (e) {
        console.error(e);
        yield put ({
            type: USER_ACTION_TYPE.USER_LOG_IN_FAILURE
        })
    }
}

function* watchLogin() {
    yield takeLatest(USER_ACTION_TYPE.USER_LOG_IN_REQUEST, login)
}

export default function* userSaga () {
    yield all([
        fork(watchLogin),
    ])
}
