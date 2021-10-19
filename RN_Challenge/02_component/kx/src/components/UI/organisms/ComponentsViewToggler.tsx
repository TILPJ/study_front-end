import React from 'react';
import type {FC} from 'react';
import { View } from 'react-native'
import { CheckboxWithText } from '../molecules'

interface ComponentsViewTogglerProps {
  isComponentsShown: boolean
  onToggle: () => void
}

export const ComponentsViewToggler: FC<ComponentsViewTogglerProps> = ({
  ...props
}) => {
  return (
    <View>
      <CheckboxWithText textValue="컴포넌트 뷰 토글 버튼" {...props}/>
    </View>
  )
}