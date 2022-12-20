import {  View, Button, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'; // userDispatch = 데이터 변경시 사용 // useSelector = 데이터 가져올때 사용
import {logInRequest, logOutRequest} from "../actions/userAction";

const LoginScreen = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer);
    //  state.userReducer
    // state 는 전체 이니셜스테이트 데이터
    // state.userReducer = ../reducers/rootReducer 안에  userReducer << 이친구를 가르키고있다. : userReducer,

    const loginApi = () => {
        dispatch(logInRequest({
            nickName: 'dhstjrxo123',
            password: 'dhstjrco123!'
        }));
    }

    const logOutApi = () => {
        dispatch(logOutRequest({
        }));
    }
    return (
        <View>
            {!user.user ?
                <Button title={"로그인"} onPress={loginApi}></Button>
                : <Button title={"로그 아웃"} onPress={logOutApi}></Button>
            }

            <View>
                {
                    user.loading ? <Text>로그인인중</Text> : user.user ? <Text>{user.user.nickName}</Text> : <Text>로그인해주세요</Text>
                }

            </View>
        </View>
    );
}


export default LoginScreen;
