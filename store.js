
import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from "./src/reducers/rootReducer"; // 리듀서 모음집이라 생각하면된다
// 리듀서를 하나하나 만들어서 이곳에 생성해도 되지만 가독성을 위해 하나의 리듀서안에 여러가지를 넣고 사용한다.

// 위에서 만든 reducer를 스토어 만들때 넣어줍니다
let store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)) // 미들웨어
);

export default store;
