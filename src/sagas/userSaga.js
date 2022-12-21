import {all, fork, takeLatest,call,put, take} from 'redux-saga/effects';
import {logInRequest} from "../actions/userAction";
import {USER_ACTION_TYPE} from "../actions/actionTypes";
import axios from 'axios'

const loginApi = (params) => // 함수형태가 이렇게되야 return 없이 자동으로 return 됨 꼭 이렇게 해야함
    axios
        .post("http://localhost:8088/api/common/getEditorList", params)
        .then(response => response.data.data.content[0])
        .catch(err => {
            throw err;
        });

function* login() { //
    try {
        let params = {}
        params['productionRangeKeywordList'] = []
        params['searchKeyword'] = ''
        params['currentPage'] = 0
        params['limit'] = 9
        params['orderBy'] = 'regDate'

        const user = yield call(loginApi, params); // call = function 호출  loginApi에 파라미터를 넣는 방법이다. 옆에 넣어주면 알아서 들어간다.  yield call(loginApi, params)
        // 로그인이 실행되고 user에 값이 들어올때까지 기다린다.
        yield put({ // put == dispatch
            type: USER_ACTION_TYPE.USER_LOG_IN_SUCCESS, user
        })
        // 성공하면 성공타입을 put = dispatch에 넣는다
    } catch (e) {
        console.error(e);
        yield put ({
            type: USER_ACTION_TYPE.USER_LOG_IN_FAILURE
        })
    }
}

function* watchLogin() { // 항상 USER_ACTION_TYPE.USER_LOG_IN_REQUEST로 들어오는 action을 감시하고있다가
    // 감지되면 login을 실행시킨다.
    yield takeLatest(USER_ACTION_TYPE.USER_LOG_IN_REQUEST, login)
}

export default function* userSaga () {
    yield all([
        fork(watchLogin), // watchlogin을 등록
    ])
}
