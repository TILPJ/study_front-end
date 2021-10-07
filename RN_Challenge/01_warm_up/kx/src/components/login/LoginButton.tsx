import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../../styles';
import { COLORS } from '../../common';

type LoginButtonProps = {
  email: string,
  password: string
}

const LoginButton: React.FC<LoginButtonProps> = ({
  email, password
}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'flex-end'}}>
      <TouchableOpacity style={[styles.loginButton, email && password ? {backgroundColor:COLORS.black} : {}]}>
        <Text style={[styles.loginButtonText, email && password ? {color: COLORS.white} : {}]}>
          로그인
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
export default LoginButton