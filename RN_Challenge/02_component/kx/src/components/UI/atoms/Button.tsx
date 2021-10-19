import React from 'react';
import type {FC} from 'react'
import { 
  TouchableOpacity, 
  TouchableOpacityProps,
  StyleSheet
} from 'react-native'
import { Text } from '../atoms'

interface ButtonProps {
  value: string
  category?: string
  onPress?: () => void
}

export const Button: FC<ButtonProps & TouchableOpacityProps> = ({
  value,
  category,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        (category === 'primary') ? styles.primary : 
        (category === 'secondary') ? styles.secondary : styles.normal]}
      {...props}
    >
      <Text value={value} size="md"/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: { 
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 60,
  },
  primary: {
    backgroundColor: '#1DAB45'
  },
  secondary: {
    backgroundColor: '#FF006E'
  },
  normal: {
    backgroundColor: '#DFDFDF'
  }
})