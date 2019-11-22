import React from "react";
import { StyleSheet } from "react-native";
import Block from "./Block";
import { theme } from "../constants";

export default function Card(props) {
  const { color, style, children, ...prop } = props;
  const cardStyles = [styles.card, style];
  return (
    <Block color={color || theme.colors.white} style={cardStyles} {...prop}>
      {children}
    </Block>
  );
}

export const styles = StyleSheet.create({
  card: {
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.base + 4,
    marginBottom: theme.sizes.base
  }
});
