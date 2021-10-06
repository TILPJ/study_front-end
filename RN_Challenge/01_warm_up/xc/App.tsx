import React, {useState} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Container} from './src/components/container';
import {GoBackNav} from './src/components/header';
import {TextInputWithLabel} from './src/components/input';

const App = () => {
  const [activeSubmit, setActiveSubmit] = useState(false);

  const onPressBack = () => {
    Alert.alert('onPressBack', 'go back');
  };
  const onPressFindId = () => {
    Alert.alert('onPressFindId', '');
  };
  const onPressSignUp = () => {
    Alert.alert('onPressSignUp', '');
  };
  const onPressSubmit = () => {
    Alert.alert('onPressSubmit', '');
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        <Container>
          <GoBackNav label="로그인" onPressBack={onPressBack} />
          <View style={styles.formField}>
            <TextInputWithLabel
              style={styles.textInput}
              label="이메일"
              placeholder="이메일을 입력해주세요"
            />
            <TextInputWithLabel
              style={styles.textInput}
              label="이메일"
              placeholder="이메일을 입력해주세요"
            />
          </View>
          <Button title="로그인 정보를 잊으셨나요?" onPress={onPressFindId} />
          <Button title="회원가입하러 가기" onPress={onPressSignUp} />
        </Container>
      </ScrollView>
      <TouchableOpacity style={styles.buttonSubmit} onPress={onPressSubmit}>
        <Text style={styles.buttonSubmitText}>로그인</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  formField: {
    marginVertical: 50,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  textInput: {
    marginBottom: 40,
  },
  buttonSubmit: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: '#111',
  },
  buttonSubmitText: {
    color: '#fff',
    fontSize: 20,
  },
  buttonSubmitDisabled: {
    backgroundColor: '#eee',
  },
  buttonSubmitTextDisabled: {
    color: '#555',
  },
});

export default App;
