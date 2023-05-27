import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import {deliveryButton} from './deliveryButton';
import theme from './theme';

export interface addProps {
  property$1: 'Default' | 'Variant2';
}

export function add(props: addProps) {
  return (
    <View style={styles.root}>
      <deliveryButton property$1="On"/>
      <Svg width="0" height="29">
        <Path d="M 0 0 L 0 29" fill="undefined"/>
      </Svg>
      <Svg width="36" height="0">
        <Path d="M 0 0 L 36 0" fill="undefined"/>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 56,
    height: 56,
  },
});
