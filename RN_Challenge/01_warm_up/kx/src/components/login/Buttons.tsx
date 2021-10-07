import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../../styles';

const Buttons = () => {
  return (
    <View style={styles.buttons}>
      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.forgotButtonText}>
          로그인 정보를 잊으셨나요?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>
          회원가입 하러가기
        </Text>
      </TouchableOpacity>
    </View>
  )
}
export default Buttons