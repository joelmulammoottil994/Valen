import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
// import { colors, typography } from "../theme"
// import { Text } from "./Text"
import styled from "styled-components/native"
// @ts-ignore
// import SvgUri from 'react-native-SvgUri-uri';

export interface NavBarProps {
  style?: StyleProp<ViewStyle>
  title?:string
}


export const NavBar = observer(function NavBar(props: NavBarProps) {
  const { style,title } = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
      <BackButton>
          {/* <SvgUri width="200" height="200" source={require('./../../assets/icons/ValenBackButton.svg')} /> */}
      </BackButton>
      <Title>{title ||"Title"}</Title>
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  left: 10px;
`
const Title = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 30px;
`
