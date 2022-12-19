import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'
import store from './src/stores/store'
import CountScreen from './src/screens/CountScreen'

export default function App() {
/* <Provider store={store}>  </Provider> redux를 사용하기위해 Provider로 감싸줘야한다. */
/* <CountScreen></CountScreen>   실습할 Screen */
  return (
    <View style={styles.container}>
      <Provider store={store}>  
        <Text>Open up App.js to start working on your app!</Text>
        <CountScreen></CountScreen>  
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
