import React from 'react';
import type { ComponentProps} from 'react';
import {View, StyleSheet, TextInput as RNTextInput, Text} from 'react-native';

import {TextInput} from "./TextInput";

export type TextInputProps = ComponentProps<typeof RNTextInput>;

interface TextInputWithLabelProps {
 label: string
}
export const TextInputWithLabel:React.FC<TextInputWithLabelProps & TextInputProps> = ({
  label,
  ...props
}) => {
  return (
    <View>
      <Text style={[styles.label]}>{label}</Text>
      <TextInput
        {...props}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  label: {
    marginBottom: 13,
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 22,
    color: '#000'
  },
});
