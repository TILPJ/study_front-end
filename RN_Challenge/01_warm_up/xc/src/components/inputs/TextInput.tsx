import React, {forwardRef} from 'react';
import type {ForwardRefRenderFunction, ComponentProps} from 'react';
import {StyleSheet, TextInput as RNTextInput} from 'react-native';

export type TextInputProps = ComponentProps<typeof RNTextInput>;

export const TextInput:React.FC<TextInputProps> = ({style, ...props}) => {
  return (
    <RNTextInput
      autoCapitalize="none"
      autoCorrect={false}
      style={[styles.textInput, style]}
      placeholderTextColor="#9e9e9e"
      {...props}
    />
  )
};
const styles = StyleSheet.create({
  textInput: {
    fontSize: 14,
    borderBottomWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 7
  }
});
