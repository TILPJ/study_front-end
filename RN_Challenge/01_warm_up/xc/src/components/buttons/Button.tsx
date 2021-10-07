import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import React from "react";

interface ButtonProps {
  disabled: boolean;
  label: string;
}

export const Button:React.FC<TouchableOpacityProps & ButtonProps> = ({
  disabled,
  label,
  ...props
}) => {
  return (
      <TouchableOpacity
        disabled={disabled}
        style={[styles.buttonSubmit, disabled ? styles.buttonSubmitDisabled : {}]}
        {...props}
      >
        <Text
          style={[styles.buttonSubmitText, disabled ? styles.buttonSubmitTextDisabled : {}]}
        >
          {label}
        </Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSubmit: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    backgroundColor: '#111',
  },
  buttonSubmitText: {
    color: '#fff',
    fontSize: 16,
  },
  buttonSubmitDisabled: {
    backgroundColor: '#dadada',
  },
  buttonSubmitTextDisabled: {
    color: '#aeaeae',
  },
});