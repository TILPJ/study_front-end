import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet, Text, TouchableOpacity,
  View,
} from 'react-native';

import {Container} from './src/components/container';
import {GoBackNav} from './src/components/header';
import {TextInputWithLabel} from './src/components/inputs';
import {Button} from "./src/components/buttons";

interface LoginState {
  email: string
  password:  string
}
const initialLoginState:LoginState = {
  email: '',
  password: ''
}

const App = () => {
  const [value, setValue] = useState<LoginState>(initialLoginState);

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

  const handleValue=(name:string)=> {
    return (text: string) => {
      setValue({...value, [name]: text})
    }
  }
  const handleValidation = () => {
    let _valid = true;

    if (value['email']?.length < 1) {
      _valid = false;
    }
    if (value['password']?.length < 1) {
      _valid = false;
    }
    return _valid
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        <Container>
          <GoBackNav label="로그인" onPressBack={onPressBack} />
          <View style={styles.formField}>
            <TextInputWithLabel
              keyboardType="email-address"
              style={styles.textInput}
              label="이메일"
              placeholder="이메일을 입력해주세요"
              value={value.email}
              onChangeText={handleValue('email')}
            />
            <TextInputWithLabel
              secureTextEntry
              style={styles.textInput}
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요"
              value={value.password}
              onChangeText={handleValue('password')}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.findIdButton} onPress={onPressFindId}>
              <Text style={styles.findIdButtonText}>로그인 정보를 잊으셨나요</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpButton} onPress={onPressSignUp}>
              <Text style={styles.signUpButtonText}>회원가입하러 가기</Text>
            </TouchableOpacity>
          </View>
        </Container>
      </ScrollView>
      <Button
        disabled={!handleValidation()}
        onPress={onPressSubmit}
        label="로그인"
      />
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
    marginBottom: 38,
  },
  buttonsContainer: {
    alignItems: 'center'
  },
  findIdButton: {
    borderBottomWidth: 1,
    borderColor: '#000'
  },
  findIdButtonText: {
    lineHeight: 13,
    fontSize: 10,
    color: '#000'
  },
  signUpButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 29,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
  },
  signUpButtonText: {
    fontSize: 10,
    color: '#000'
  }
});

export default App;
