import React, { useState } from "react";
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";
import { Button, Block, Text, Input } from "../components";
import { theme } from "../constants";
import { useNavigation } from "react-navigation-hooks";

const VALID_EMAIL = "kriss@kriss.com";

export default function Forgot() {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState(VALID_EMAIL);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleForgot() {
    const error = [];
    Keyboard.dismiss();
    setLoading(true);
    email !== VALID_EMAIL && error.push("email");
    setErrors(error);
    !error.length
      ? Alert.alert(
          "Password sent!",
          "Please check you email.",
          [
            {
              text: "OK",
              onPress: () => {
                navigate("Login");
              }
            }
          ],
          { cancelable: false }
        )
      : Alert.alert(
          "Error",
          "Please check you Email address.",
          [{ text: "Try again" }],
          { cancelable: false }
        );
  }
  const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

  return (
    <KeyboardAvoidingView style={styles.forgot} behavior="padding">
      <Block padding={[0, theme.sizes.base * 2]}>
        <Text h1 bold>
          Forgot
        </Text>
        <Block middle>
          <Input
            label="Email"
            error={hasErrors("email")}
            style={[styles.input, hasErrors("email")]}
            defaultValue={email}
            onChangeText={text => setEmail(text)}
          />
          <Button gradient onPress={() => handleForgot()}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                Forgot
              </Text>
            )}
          </Button>
          <Button onPress={() => navigate("Login")}>
            <Text
              gray
              caption
              center
              style={{ textDecorationLine: "underline" }}
            >
              Back to Login
            </Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  forgot: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
