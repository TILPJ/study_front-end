import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, FlatList, Image } from '../atoms'
import { dummy } from '../../../data/dummy'

export const CategoryList = () => {
  return (
    <View style={[styles.view]}>
      <Text value="FlatList 구현해보기" size="lg" />
      <FlatList 
        data={dummy}
        renderItem={({item}: {item: any}) => (<Image source={{uri:item.thumbnail}}/>)}
        horizontal
      />
    </View>
  )
}
const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    width: '100%',
    height: 300
  }
})