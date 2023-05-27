import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import {deliveryButton} from './deliveryButton';
import theme from './theme';

export function Ordercard() {
  return (
    <View style={styles.root}>
      <View style={styles.group$5}>
      </View>
      <Text style={styles.glass}>
        {`Glass`}
      </Text>
      <Text style={styles.$385}>
        {`₹385`}
      </Text>
      <Text style={styles.dervinBlueLightBlockingGlassesGamingFilterTransparentSquareEyeglassesForEyeProtection}>
        {`Dervin Blue Light Blocking Glasses 
Gaming Filter Transparent 
Square Eyeglasses for Eye Protection`}
      </Text>
      <deliveryButton property$1="On"/>
      <View style={styles.IconMapPin}>
        <Svg width="16.875" height="30">
          <Path d="M 6.562627580430773 18.57106633840555 L 6.562627580430773 27.752300665057785 L 7.852887288999126 29.687103472348387 C 8.131213012276325 30.10429912195277 8.744701572795343 30.10429912195277 9.023027296072542 29.687103472348387 L 10.312700483534071 27.752300665057785 L 10.312700483534071 18.57106633840555 C 9.703899565553936 18.683568535345323 9.078692094269249 18.75036657573204 8.437664031982422 18.75036657573204 C 7.796635969695596 18.75036657573204 7.171428498410908 18.683568535345323 6.562627580430773 18.57106633840555 Z M 8.437664031982422 0 C 3.777612572512427 0 0 3.7776129875814863 0 8.437664959079418 C 0 13.09771693057735 3.777612572512427 16.875329918158837 8.437664031982422 16.875329918158837 C 13.097715491452416 16.875329918158837 16.875328063964844 13.09771693057735 16.875328063964844 8.437664959079418 C 16.875328063964844 3.7776129875814863 13.097715491452416 0 8.437664031982422 0 Z M 8.437664031982422 4.45321206173636 C 6.240355690320333 4.45321206173636 4.453211572435167 6.24035637598582 4.453211572435167 8.437664959079418 C 4.453211572435167 8.82556316090922 4.137971062312393 9.14080370566937 3.7500729031032987 9.14080370566937 C 3.362174743894204 9.14080370566937 3.04693423377143 8.82556316090922 3.04693423377143 8.437664959079418 C 3.04693423377143 5.4651459346930125 5.465731184746094 3.046934568556457 8.437664031982422 3.046934568556457 C 8.825562191191516 3.046934568556457 9.140802701314291 3.3621751133166056 9.140802701314291 3.7500733151464085 C 9.140802701314291 4.1379715169762115 8.825562191191516 4.45321206173636 8.437664031982422 4.45321206173636 Z" fill="#ffd301"/>
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 386,
    height: 114,
  },
  group$5: {
    display: 'inline-flex',
    flexDirection: 'column',
    width: 386,
    height: 114,
  },
  glass: {
    width: 38,
    height: 20,
    fontSize: 13,
    fontWeight: 700,
    textAlign: 'left',
    textAlignVertical: 'top',
    color: '#ffffff',
  },
  $385: {
    width: 33,
    height: 20,
    fontSize: 13,
    fontWeight: 500,
    textAlign: 'left',
    textAlignVertical: 'top',
    color: '#ffffff',
  },
  dervinBlueLightBlockingGlassesGamingFilterTransparentSquareEyeglassesForEyeProtection: {
    width: 179,
    height: 45,
    fontSize: 10,
    fontWeight: 400,
    textAlign: 'left',
    textAlignVertical: 'top',
    color: '#ffffff',
  },
  IconMapPin: {
    display: 'inline-flex',
    flexDirection: 'column',
    width: 16.875328063964844,
    height: 30,
  },
});
