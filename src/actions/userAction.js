import {USER_ACTION_TYPE} from './actionTypes'


const logInRequest = (payload) => { // async action creator 비동기 액션
    return (dispatch, getState) => { // 비동기 액션
        dispatch(loading);
        try {
            setTimeout(function () {
                dispatch(logInSuccess(payload));
            }, 2000)
        } catch (e) {
            dispatch(logInFailure)
        }
    };
}

const loading = () => {
    return {
        type: USER_ACTION_TYPE.USER_LOADING,
    }
}


const logInSuccess = (payload) => {
    return {
        type: USER_ACTION_TYPE.USER_LOG_IN_SUCCESS,
        payload,
    }
}

const logInFailure = (error) => {
    return {
        type: USER_ACTION_TYPE.USER_INFO_FAILURE,
        error,
    }
}


const logOutRequest = () => {
    return (dispatch, getState) => { // 비동기 액션
        dispatch(loading);
        try {
            setTimeout(function () {
                dispatch(logOutSuccess());
            }, 2000)
        } catch (e) {
            dispatch(logInFailure)
        }
    };
}

const logOutSuccess = () => {
    return { // action
        type: USER_ACTION_TYPE.USER_LOG_OUT_SUCCESS
    }
}

const logOutFailure = () => {
    return { // action
        type: USER_ACTION_TYPE.USER_LOG_OUT_FAILURE
    }
}


export {logOutFailure, logOutSuccess, logOutRequest, logInSuccess, logInRequest, logInFailure}
