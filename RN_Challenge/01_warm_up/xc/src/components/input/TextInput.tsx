import React, {forwardRef} from 'react';
import type {ForwardRefRenderFunction, ComponentProps} from 'react';
import {StyleSheet, TextInput as RNTextInput} from 'react-native';

export type TextInputProps = ComponentProps<typeof RNTextInput>;

export const TextInput:React.FC<TextInputProps> = ({style, ...props}) => {
  return (
    <RNTextInput
      style={[styles.textInput, style]}
      placeholderTextColor="#ccc"
      {...props}
    />
  )
};
const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
    paddingVertical: 6
  }
});
