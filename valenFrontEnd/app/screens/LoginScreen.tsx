import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
import { Screen, NavBar } from "../components"
import styled from "styled-components/native"

// import { useNavigation } from "@react-navigation/native";
// import { useStores } from "../models";

// @ts-ignore
export const LoginScreen: FC<StackScreenProps<AppStackScreenProps, "Login">> = observer(
  function LoginScreen() {
    // const { someStore, anotherStore } = useStores()
    // const navigation = useNavigation()

    return (
      <Screen style={$root} preset="scroll">
        <Container>
          <NavBar title='Login'/>
          <InputContainer>
            <InputLabel>Username</InputLabel>
            <InputBar placeholder="Enter your username" />
          </InputContainer>
          <InputContainer>
            <InputLabel>Password</InputLabel>
            <InputBar placeholder="Enter your password" secureTextEntry={true} />
          </InputContainer>
          <ForgotPasswordButton>
            <ForgotPasswordText>Forgot Password</ForgotPasswordText>
          </ForgotPasswordButton>
          <LoginButton>
            <LoginButtonText>Login</LoginButtonText>
          </LoginButton>
          <SignUpText>Sign Up</SignUpText>
          <GoogleLoginButton>
            <GoogleLoginText>Login Using Google</GoogleLoginText>
          </GoogleLoginButton>
        </Container>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
const Container = styled.View`
  flex: 1;
  background-color: #000000;
  padding: 20px;
`

const InputContainer = styled.View`
  margin-bottom: 20px;
`

const InputLabel = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`

const InputBar = styled.TextInput`
  background-color: transparent;
  height: 40px;
  border-radius: 100px;
  padding: 10px;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, #fe1c7f, #ffd301) 0.5;
  color: #ffffff;
`

const ForgotPasswordButton = styled.TouchableOpacity`
  align-items: flex-end;
  margin-bottom: 20px;
`

const ForgotPasswordText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  text-decoration: underline;
`

const LoginButton = styled.TouchableOpacity`
  background-color: #ffffff;
  height: 40px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border-image: linear-gradient(to right, #fe1c7f, #ffd301) 1;
`

const LoginButtonText = styled.Text`
  color: #000000;
  font-size: 16px;
  font-weight: bold;
`

const SignUpText = styled.Text`
  color: #ffffff;
  font-size: 13px;
  font-weight: 1px;
  text-align: center;
  margin-bottom: 20px;
  text-decoration: underline;
`

const GoogleLoginButton = styled.TouchableOpacity`
  background-color: #ffffff;
  height: 40px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`

const GoogleLoginText = styled.Text`
  color: #000000;
  font-size: 16px;
  font-weight: bold;
`
