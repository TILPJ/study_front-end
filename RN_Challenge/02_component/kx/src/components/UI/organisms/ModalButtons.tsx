import React, { useMemo } from 'react';
import type {FC} from 'react';
import { View } from 'react-native'
import { Buttons } from '../molecules';

interface ModalButtonsProps {
  togglers: any
}

export const ModalButtons: FC<ModalButtonsProps> = ({
  togglers
}) => {
  const buttonAttributes = useMemo(() => [
    {
      value: '모달 열기',
      category: 'primary',
      toggler: togglers.normal
    },
    {
      value: '풀스크린 모달 열기',
      category: 'secondary',
      toggler: togglers.fullscreen
    }
  ],[])
  return (
    <View>
      <Buttons buttonAttributes={buttonAttributes}/>
    </View>
  )
}