import React, {useState} from 'react';
import { View } from 'react-native';
import FormInput from '../components/common/FormInput';
import Buttons from '../components/login/Buttons';
import LoginButton from '../components/login/LoginButton';
import { styles } from '../styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailInput = (text: string) => setEmail(text);
  const handlePasswordInput = (text: string) => setPassword(text);

  return (
    <>
      <View style={styles.loginContainer}>
        <FormInput
          title="이메일"
          placeholder="이메일을 입력해주세요"
          keyboardType="email-address"
          onTextInput={handleEmailInput}
        />
        <FormInput
          title="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          secureTextEntry
          onTextInput={handlePasswordInput}
        />
        <Buttons/>
      </View>
      <LoginButton email={email} password={password}/>
    </>
  )
}

export default Login;