import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PlusSvg from './PlusSvg';
import Plus2Svg from './Plus2Svg';
import {scaleHeight, scaleWidth} from '../constants/scale';

const PlusMainSvg = () => {
  return (
    <View style={styles.container}>
      <View style={styles.plus1container}>
        <PlusSvg />
      </View>
      <View style={styles.plus2container}>
        <Plus2Svg />
      </View>
    </View>
  );
};

export default PlusMainSvg;

const styles = StyleSheet.create({
  container: {
    width: scaleWidth(78),
    height: scaleWidth(78),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: scaleHeight(-80),
    zIndex: 10,
  },
  plus1container: {
    position: 'absolute',
  },
  plus2container: {
    position: 'absolute',
    bottom: scaleHeight(12),
    left: scaleWidth(17),
    right: scaleWidth(17),
  },
});
