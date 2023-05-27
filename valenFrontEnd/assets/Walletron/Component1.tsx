import React from 'react';
import {StyleSheet, View} from 'react-native';
import {chatBar} from './chatBar';
import theme from './theme';

export function Component1() {
  return (
    <View style={styles.root}>
      <chatBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 513,
    height: 304,
  },
});
