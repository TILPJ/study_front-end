import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface GoBackNavProps {
  onPressBack: () => void;
  label?: string;
}

export const GoBackNav = ({label, onPressBack}: GoBackNavProps) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={onPressBack}
      >
        <Image
          style={styles.arrowIcon}
          source={require('../../assets/images/header/arrow_prev.png')}
        />
      </TouchableOpacity>
      {label && <Text style={styles.label}>로그인</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  arrowIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  backButton: {
  },
  label: {
    marginLeft: 8,
    color: '#000',
    fontSize: 16,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
