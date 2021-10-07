import React from 'react'
import {
  Text,
  TextInput,
  View,
} from 'react-native';
import { styles } from '../../styles';

type FormInputProps = {
  title: string,
  placeholder: string,
  keyboardType?: string | undefined,
  secureTextEntry?: boolean,
  onTextInput: (text: string) => void,
}

const FormInput: React.FC<FormInputProps> = ({
  title,
  placeholder,
  keyboardType,
  secureTextEntry,
  onTextInput,
}) => {
  return (
    <>
      <View>
        <Text style={styles.mainText}>{title}</Text>
        <TextInput
          placeholder={placeholder}
          // keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onChangeText={onTextInput}
          style={styles.textInput}
        />
      </View>
      <View style={{height:38}} />
    </>
  )
}
export default FormInput