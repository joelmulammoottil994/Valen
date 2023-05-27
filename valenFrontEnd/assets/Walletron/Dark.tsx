import React from 'react';
import {StyleSheet, View} from 'react-native';
import theme from './theme';

export interface DarkProps {
  property$1: 'Rectangle 6' | 'Rectangle 7' | 'colourPallet';
}

export function Dark(props: DarkProps) {
  return (
    <View style={styles.root}>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 519,
    height: 235,
  },
});
