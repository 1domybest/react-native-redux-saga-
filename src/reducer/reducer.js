import {INCRESECOUNT, DECRESECOUNT, SET_COUNT} from '../action/countAction' // 엑션 타입 선언

let initialState = {
  count: 0,
}

const reducer = (state = initialState, action) => {
  let  {type, payload} = action
  switch (type) {
    case INCRESECOUNT: // 1씩 증가
      return {
        ...state, 
        count: state.count + 1,
      };

    case DECRESECOUNT: // 1씩 감소
      return {
        ...state,
        count: state.count - 1
      };
      
      case SET_COUNT: // 100 증가
        return {
          ...state,
          count: payload //payload 에 100이 들어가있음 payload = action.payload
        };

    default:
      return state;
  }
};

export default reducer;