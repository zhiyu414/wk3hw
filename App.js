import React from 'react';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { StyleSheet, StatusBar} from "react-native";
import Navigation from './src/navigation';
import Header from "./src/components/Header";

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        {/* <Header /> */}
        <Navigation />            
      </SafeAreaView>  
    </SafeAreaProvider>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
  },
})

export default App;