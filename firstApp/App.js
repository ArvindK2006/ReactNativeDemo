//import { StatusBar } from 'expo-status-bar';
import { Platform, StatusBar, Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log(Dimensions.get("screen"));
  return (
    <SafeAreaView style={styles.container}>
      <View style ={styles.top}>
        <Text style={styles.top}>
          got me breathin with dragons
        </Text>
      </View>
      <View style ={styles.bottom}>
      <Text style={styles.bottom}>
          ill crack the egg in your basket
        </Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ee22dd',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  top : {
    //flex: 1,
    backgroundColor : "eeaa00",
    width: 300,
    height: 100,
    
    borderRadius: '50%',
    borderTopRightRadius: 30,
    borderBottomColor: 'white',
    borderBottomWidth: 5,
    
  },
  bottom: {
    flex: 2,
    backgroundColor: "123456",
    width: 200,
  },
  text:{
    fontSize: 24,
    color: '#ffffff'
  }
});
