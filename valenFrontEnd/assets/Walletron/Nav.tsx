import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import theme from './theme';

export interface NavProps {
  property$1: 'searchRes' | 'searchResCheck' | 'coin' | 'cript';
}

export function Nav(props: NavProps) {
  return (
    <View style={styles.root}>
      <Unknown width="130" height="130"/>
      <View style={styles.image}>
        <Unknown width="120" height="120"/>
      </View>
      <Unknown width="70" height="70"/>
      <Text style={styles.name}>
        {`Name`}
      </Text>
      <Text style={styles.$8078xxxxxxxxxxxx}>
        {`8078xxxxxxxxxxxx`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 654,
    height: 140,
  },
  image: {
    display: 'inline-flex',
    flexDirection: 'column',
    width: 120.00000762939453,
    height: 120.00000762939453,
  },
  name: {
    width: 36,
    height: 16,
    fontSize: 13,
    fontWeight: 400,
    textAlign: 'left',
    textAlignVertical: 'top',
    color: '#ffffff',
  },
  $8078xxxxxxxxxxxx: {
    width: 116,
    height: 16,
    fontSize: 13,
    fontWeight: 400,
    textAlign: 'left',
    textAlignVertical: 'top',
    color: '#ffffff',
  },
});
