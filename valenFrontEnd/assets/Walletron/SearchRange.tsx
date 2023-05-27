import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SearchRangeFrame5} from './SearchRangeFrame5';
import {SearchRangeVector3} from './SearchRangeVector3';
import {SearchRangeFrame6} from './SearchRangeFrame6';
import {SearchRangeGroup2} from './SearchRangeGroup2';
import theme from './theme';

export interface SearchRangeProps {
  property$1: 'Average' | 'Maximum' | 'Minimum';
}

export function SearchRange(props: SearchRangeProps) {
  return (
    <View style={styles.root}>
      <SearchRangeFrame5/>
      <SearchRangeVector3/>
      <SearchRangeFrame6/>
      <SearchRangeGroup2/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 310,
    height: 104,
  },
});
