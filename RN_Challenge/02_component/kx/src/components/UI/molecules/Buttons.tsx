import React from 'react';
import type {FC} from 'react'
import { Button } from '../atoms'

interface ButtonsProps {
  buttonAttributes: any
}

export const Buttons: FC<ButtonsProps> = ({
  buttonAttributes,
}) => {
  return (
    <>
      {buttonAttributes.map((buttonAttribute: any) => 
        <Button 
          value={buttonAttribute.value}
          category={buttonAttribute.category}
          onPress={buttonAttribute.toggler}
        />)
      }
    </>
  )
}