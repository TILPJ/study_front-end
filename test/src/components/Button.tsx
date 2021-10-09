import React from 'react';
import type {ComponentProps} from 'react';
import { Button as RNButton} from 'react-native';

export type ButtonProps = ComponentProps<typeof RNButton>;

const Button:React.FC<ButtonProps> = ({...props}) => {
  return (
    <RNButton 
      {...props}
    />
  )
}
export default Button;