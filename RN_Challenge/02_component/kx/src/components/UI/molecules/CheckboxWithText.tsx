import React from 'react';
import type {FC} from 'react'
import { View, StyleSheet } from 'react-native';
import { Checkbox, Text } from '../atoms'

interface CheckboxWithTextProps {
  isComponentsShown: boolean
  onToggle: () => void
  textValue?: string
}

export const CheckboxWithText: FC<CheckboxWithTextProps> = ({
  isComponentsShown,
  onToggle,
  textValue
}) => {
  return (
    <View style={[styles.view]}>
      <Checkbox
        value={isComponentsShown}
        onValueChange={onToggle}
      />
      <Text value={textValue}/>
    </View>
  )
}
const styles = StyleSheet.create({
  view: {flexDirection: 'row', alignItems: 'center'}
})