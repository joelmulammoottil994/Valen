import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import {Button} from './Button';
import theme from './theme';

export interface payButtonProps {
  property$1: 'criptoMain' | 'main' | 'moneyMain';
}

export function payButton(props: payButtonProps) {
  return (
    <View style={styles.root}>
      <Button/>
      <Text style={styles.pay}>
        {`Pay`}
      </Text>
      <Unknown width="50" height="50"/>
      <Unknown width="50" height="50"/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 324,
    height: 72,
  },
  pay: {
    width: 41,
    height: 36,
    fontSize: 23,
    fontWeight: 700,
    textAlign: 'left',
    textAlignVertical: 'top',
    color: '#ffffff',
  },
});
