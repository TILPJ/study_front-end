import React, { useMemo } from 'react';
import type { FC, ComponentProps } from 'react'
import { Text as RNText, StyleSheet } from 'react-native'

type RNTextType = ComponentProps<typeof RNText>;
interface TextProps {
  value?: string
  size?: string
}

export const Text: FC<TextProps & RNTextType> = ({
  value,
  size
}) => {
  const styles = useMemo(() => StyleSheet.create({
      text : {
        fontSize: (size === 'lg') ? 30 : (size === 'md') ? 25 : 20
      }
    }),[])

  return (
    <RNText style={[styles.text]}>
      {value}
    </RNText>
  )
}