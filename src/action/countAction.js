export const INCRESECOUNT = 'increseCount'; // 엑션 타입 선언 자바로 따지면 컨트롤러 매핑한다고 생각하면 쉽다.  ++ 각 타입마다 성공 실패 시작 성공후 등 이름을 만든다 _SUCCESS
export const DECRESECOUNT = 'decreseCount';
export const SET_COUNT = 'setCount';

export const setCount = (count) => dispatch => {
    console.log(count); // 받은 매게 변수   결과 = 101 // 매게변수가 들어오는지 확인하기위해 100이 아닌 101을 넣었음
    dispatch({
        type: SET_COUNT,
        payload: 100 // 실질적으로 여기에 count가 들어가는게 맞음
    });
}


export const increseCount = (count) => dispatch => {
    console.log(count);
    dispatch({
        type: INCRESECOUNT,
    });
}

export const decreseCount = (count) => dispatch => {
    console.log(count);
    dispatch({
        type: DECRESECOUNT,
    });
}