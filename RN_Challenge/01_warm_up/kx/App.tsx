import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { styles } from './src/styles';
import TopBar from './src/components/common/TopBar'
import Login from './src/pages/Login';

const App = () => {
  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <TopBar />
      <Login />
    </SafeAreaView>
  );
};



export default App;
