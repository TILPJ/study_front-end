import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Components from './src/components/pages/Components'

const App = () => {

  return (
    <SafeAreaView style={[styles.view]}>
      <Components/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {flex:1, padding: 20}
})

export default App;
