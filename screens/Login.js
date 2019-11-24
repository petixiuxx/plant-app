import React, { useState } from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { Button, Block, Text, Input } from "../components";
import { theme } from "../constants";
import { useNavigation } from "react-navigation-hooks";

const VALID_EMAIL = "kriss @kriss.com";
const VALID_PASSWORD = "12345";

function Login() {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState(VALID_EMAIL);
  const [password, setPassword] = useState(VALID_PASSWORD);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleLogin() {
    const error = [];
    setLoading(true);
    email !== VALID_EMAIL && error.push("email");
    password !== VALID_PASSWORD && error.push("password");
    setErrors(error);
    setLoading(false);
    !errors.length && navigate("Browse");
  }
  const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

  return (
    <KeyboardAvoidingView style={styles.login} behavior="padding">
      <Block padding={[0, theme.sizes.base * 2]}>
        <Text h1 bold>
          Login
        </Text>
        <Block middle>
          <Input
            label="Email"
            error={hasErrors("email")}
            style={[styles.input, hasErrors("email")]}
            defaultValue={email}
            onChangeText={text => setEmail(text)}
          />
          <Input
            secure
            label="Password"
            error={hasErrors("password")}
            style={[styles.input, hasErrors("password")]}
            defaultValue={password}
            onChangeText={text => setPassword(text)}
          />
          <Button gradient onPress={() => handleLogin()}>
            <Text bold white center>
              Login
            </Text>
          </Button>
          <Button onPress={() => {}}>
            <Text
              gray
              caption
              center
              style={{ textDecorationLine: "underline" }}
            >
              Forgot your password?
            </Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  );
}

Login.navigationOptions = {};

const styles = StyleSheet.create({
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  login: {
    flex: 1,
    justifyContent: "center"
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
});

export default Login;
