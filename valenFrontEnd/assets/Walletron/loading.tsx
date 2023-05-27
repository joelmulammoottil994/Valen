import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import {CamCirclebgCircle} from './CamCirclebgCircle';
import {CamCircledPink} from './CamCircledPink';
import {CamCircleyellow} from './CamCircleyellow';
import {CamCircleEllipse9} from './CamCircleEllipse9';
import theme from './theme';

export interface loadingProps {
  property$1: '1' | 'Variant2';
}

export function loading(props: loadingProps) {
  return (
    <View style={styles.root}>
      <Unknown width="368" height="368"/>
      <CamCirclebgCircle/>
      <CamCircledPink/>
      <CamCircleyellow/>
      <CamCircleEllipse9/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 470,
    height: 469,
  },
});
