import {USER_ACTION_TYPE} from '../actions/actionTypes'
import {produce} from 'immer'

const initialState = {
    loading: false,
    user: null,
    userList: []
}

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
                break;
        }
    })
}

export {userReducer};
