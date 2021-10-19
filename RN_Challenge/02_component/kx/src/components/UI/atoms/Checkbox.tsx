import React from 'react';
import type {FC, ComponentProps} from 'react';
import CheckBox from '@react-native-community/checkbox';

type CommunityCheckBoxType = ComponentProps<typeof CheckBox>
interface CheckboxProps {}

export const Checkbox: FC<CheckboxProps & CommunityCheckBoxType> = ({
  ...props
}) => {
  return (
    <CheckBox
      disabled={false}
      {...props}
    />
  )
}