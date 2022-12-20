import {USER_ACTION_TYPE} from '../actions/actionTypes'
import {produce} from 'immer'

const initialState = {
    loading: false,
    user: null
}

/*
immer 적용 전

const userReducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        const {type, payload} = action;
        switch (type) {
            case USER_ACTION_TYPE.USER_LOADING:
                return {
                    ...state,
                    loading: true
                }
            case USER_ACTION_TYPE.USER_LOG_IN_REQUEST:
                return {
                    ...state,
                    loading: true
                }
            case USER_ACTION_TYPE.USER_LOG_IN_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    user: payload
                }
            case USER_ACTION_TYPE.USER_LOG_IN_FAILURE:
                return {
                    ...state,
                    loading: false
                }
            case USER_ACTION_TYPE.USER_LOG_OUT_REQUEST:
                return {
                    ...state,
                    loading: true
                }
            case USER_ACTION_TYPE.USER_LOG_OUT_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    user: null,
                }
            case USER_ACTION_TYPE.USER_LOG_OUT_FAILURE:
                return {
                    ...state,
                    loading: false,
                }
            default:
                return state
        }
    })
}
*/


// immer 기본 형태
// nextState = produce(prevState, (draft) => {})

const userReducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        const {type, payload} = action;
        switch (type) {
            case USER_ACTION_TYPE.USER_LOADING:
                draft.loading = true
            case USER_ACTION_TYPE.USER_LOG_IN_REQUEST:
                draft.loading = true
            case USER_ACTION_TYPE.USER_LOG_IN_SUCCESS:
                draft.user = payload
                draft.loading = true
            case USER_ACTION_TYPE.USER_LOG_IN_FAILURE:
                draft.loading = false
            case USER_ACTION_TYPE.USER_LOG_OUT_REQUEST:
                draft.loading = true
            case USER_ACTION_TYPE.USER_LOG_OUT_SUCCESS:
                draft.user = null
                draft.loading = false
            case USER_ACTION_TYPE.USER_LOG_OUT_FAILURE:
                draft.loading = false
            default:
                return state
        }
    })
}

export {userReducer};
