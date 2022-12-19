import {Provider} from 'react-redux'
import {View, Text} from 'react-native'
import store from './store'
import {RouterView} from './src/index'

export default function App() {
/* <Provider store={store}>  </Provider> redux를 사용하기위해 Provider로 감싸줘야한다. */
/* <CountScreen></CountScreen>   실습할 Screen */
  return (
    <View>
      <Text>ㅎㄷㅎㄷ</Text>
    </View>
    // <Provider store={store}>  
    //     <RouterView/>
    //   </Provider>
  );
}
