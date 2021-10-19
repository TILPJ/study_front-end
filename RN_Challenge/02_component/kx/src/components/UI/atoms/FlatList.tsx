import React from 'react';
import type { FC, ComponentProps } from 'react'
import { FlatList as RNFlatList } from 'react-native';

type RNFlatListType = ComponentProps<typeof RNFlatList>
interface FlatList {
}

export const FlatList: FC<FlatList & RNFlatListType> = ({ ...props }) => {
  return (
    <>
      <RNFlatList {...props} />
    </>
  )
}