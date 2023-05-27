import React from 'react';
import {StyleSheet, View} from 'react-native';
import theme from './theme';

export interface togleButtonProps {
  property$1: 'off' | 'on';
}

export function togleButton(props: togleButtonProps) {
  return (
    <View style={styles.root}>
      <View style={styles.body}>
      </View>
      <View style={styles.nan}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 48.68421173095703,
    height: 23.6842098236084,
  },
  body: {
    display: 'inline-flex',
    flexDirection: 'column',
    width: 48.68421173095703,
    height: 23.6842098236084,
  },
  nan: {
    display: 'inline-flex',
    flexDirection: 'column',
    width: 16.4964656829834,
    height: 16.4964656829834,
  },
});
