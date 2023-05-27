import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import theme from './theme';

export function Button() {
  return (
    <View style={styles.root}>
      <View style={styles.frame$1}>
        <Text style={styles.text}>
          {`Text`}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 252,
    height: 56,
  },
  frame$1: {
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    padding: 10,
  },
  text: {
    width: 47,
    height: 28,
    fontSize: 23,
    fontWeight: 400,
    textAlign: 'left',
    textAlignVertical: 'top',
    color: '#ffffff',
  },
});
