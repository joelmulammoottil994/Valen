import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import theme from './theme';

export interface loadingIconProps {
  property$1: 'Default' | 'Variant3';
}

export function loadingIcon(props: loadingIconProps) {
  return (
    <View style={styles.root}>
      <Svg width="196.75" height="172.975830078125">
        <Path d="M 0 3.396817911592393 C 39.73813003751121 -4.948030679422512 72.1361595562897 1.0020121680076741 102.47077357027952 33.394773163839254 C 43.80226978725877 24.899785840382894 43.80227324627775 82.50641681699092 43.80227324627775 82.50641681699092 L 86.54267609473433 75.07330258468355 L 91.32110326198651 114.36262165802805 C 144.41476843184176 105.86756169516651 132.2032346437655 60.207004939682925 132.2032346437655 60.207004939682925 C 140.5212421985729 66.48975571976118 174.94363403320312 95.77975997883514 174.94363403320312 145.95327758789062" fill="undefined"/>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 196.75003051757812,
    height: 172.97584533691406,
  },
});
