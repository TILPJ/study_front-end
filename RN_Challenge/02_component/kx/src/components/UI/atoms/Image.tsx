import React from 'react';
import type {FC, ComponentProps} from 'react'
import { Image as RNImage, StyleSheet }  from 'react-native';

type RNImageType = ComponentProps<typeof RNImage>;
interface ImageProps {}

export const Image: FC<ImageProps & RNImageType> = ({
  ...props
}) => {
  return (
    <RNImage 
      style={[styles.image]} 
      {...props} 
    />
  )
}
const styles = StyleSheet.create({
  image: {width: 100, height: 100}
})