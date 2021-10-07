import React from 'react';
import { View, Text } from 'react-native'
import Arrow from '../../assets/svg/Arrow.svg';
import { styles } from '../../styles';

const TopBar = () => {
  return (
    <>
      <View style={[styles.topBar]}>
        <Arrow/>
        <Text style={[styles.mainText, {marginLeft:10}]}>로그인</Text>
      </View>
      <View style={{height:52}} />
    </>
  )
}
export default TopBar