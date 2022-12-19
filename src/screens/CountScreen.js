import { useDispatch, useSelector } from 'react-redux'; // userDispatch = 데이터 변경시 사용 // useSelector = 데이터 가져올때 사용
import {setCount, increseCount, decreseCount} from '../action/countAction' // axios 나 어떤 비지니스 로직을 처리할때 사용
const Counter = () => {
  const dispatch = useDispatch(); // dispatch를 편하게 변수에 담아 사용한다.
  const count = useSelector(state => state.reducer.count); // 데이터 가져오기
  const handleIncrement = () => {  
    dispatch(increseCount()); // dispatch안에 action에서 만든 함수 넣고 실행   
                              // 이렇게 함수를 넣고 실행하면 
                              //action (변경할 데이터)-> dispatch(변경) -> getState(변경된 데이터 실행) -> 상단에있는 useSeletor 실행이되어 변경된 값이 보인다.
  }

  const handleDecrement = () => {  
    dispatch(decreseCount());
  }

  const updateCount = () => { 
    dispatch(setCount(101));
  }

  return (
    <div>
      <center>
        <h1>Redux</h1>
        <h1>{count}</h1>
        <button className="btn btn-primary" onClick={handleIncrement}>Increment</button>
        <button className="btn btn-warning" onClick={handleDecrement}>decrement</button>
        <button className="btn btn-warning" onClick={updateCount}>100증가</button>
      </center>
    </div>
  );
}

export default Counter;