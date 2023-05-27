import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import theme from './theme';

export interface modProps {
  property$1: 'off' | 'on';
}

export function mod(props: modProps) {
  return (
    <View style={styles.root}>
      <View style={styles.body}>
      </View>
      <View style={styles.nan}>
        <View style={styles.ethereum}>
          <View style={styles.group}>
            <Svg width="21.3671875" height="21.9603271484375">
              <Path d="M 21.34929084777832 10.965485572814941 C 21.34929084777832 17.021556328897134 16.5700895931314 21.930971145629883 10.67464542388916 21.930971145629883 C 4.779201254646921 21.930971145629883 0 17.021556328897134 0 10.965485572814941 C 0 4.909414816732749 4.779201254646921 0 10.67464542388916 0 C 16.5700895931314 0 21.34929084777832 4.909414816732749 21.34929084777832 10.965485572814941 Z" fill="#627eea"/>
            </Svg>
            <View style={styles.group}>
              <Svg width="5.005859375" height="8.3861083984375">
                <Path d="M 0 0 L 0 6.080264868212871 L 4.996151924133301 8.376644134521484 L 0 0 Z" fill="#fe1c7f"/>
              </Svg>
              <Svg width="5.0068359375" height="8.3861083984375">
                <Path d="M 4.9968180656433105 0 L 0 8.376643180847168 L 4.9968180656433105 6.0802641759795195 L 4.9968180656433105 0 Z" fill="#fe1c7f"/>
              </Svg>
              <Svg width="5.0087890625" height="7.1226806640625">
                <Path d="M 0 2.9826346463426807 L 0 7.113226413726807 L 5.000940799713135 0 L 0 2.9826346463426807 Z" fill="#fe1c7f"/>
              </Svg>
              <Svg width="5.005859375" height="7.1226806640625">
                <Path d="M 4.998269081115723 7.113232135772706 L 4.998269081115723 2.981950766520197 L 0 0 L 4.998269081115723 7.113232135772706 Z" fill="#fe1c7f"/>
              </Svg>
              <Svg width="5.005859375" height="5.284912109375">
                <Path d="M 0 5.275417327880859 L 4.999720573425293 2.2934806479552456 L 0 0 L 0 5.275417327880859 Z" fill="#fe1c7f"/>
              </Svg>
              <Svg width="5.005859375" height="5.284912109375">
                <Path d="M 0 2.2934802333466084 L 5.000386714935303 5.275416374206543 L 5.000386714935303 0 L 0 2.2934802333466084 Z" fill="#fe1c7f"/>
              </Svg>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 60,
    height: 30,
  },
  body: {
    display: 'inline-flex',
    flexDirection: 'column',
    width: 60,
    height: 30,
  },
  nan: {
    display: 'inline-flex',
    flexDirection: 'column',
    width: 20.895540237426758,
    height: 20.33094596862793,
  },
  ethereum: {
    display: 'inline-flex',
    flexDirection: 'column',
    width: 10.027591705322266,
    height: 16.47504997253418,
  },
  group: {
    display: 'inline-flex',
    flexDirection: 'column',
    width: 10.016783714294434,
    height: 16.466732025146484,
  },
});
