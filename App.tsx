import { NewAppScreen } from '@react-native/new-app-screen';
import { StyleSheet, View, Text , Button } from 'react-native';

function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <View style={{margin : 10, backgroundColor : 'white'}}>
        <Button title='Press Me' color='blue'/>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text : {
    color : 'white',
    fontSize : 40
  }
});

export default App;
