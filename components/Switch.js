import React from "react";

import { Switch, Platform } from "react-native";
import { theme } from "../constants";

const GRAY_COLOR = "rgba(168, 182, 200, 0.30)";

export default function SwitchInput() {
  const { value, ...prop } = props;
  let thumbColor = null;

  if (Platform.OS === "android") {
    thumbColor = GRAY_COLOR;
    if (prop.value) thumbColor = theme.colors.secondary;
  }
  return (
    <Switch
      thumbColor={thumbColor}
      ios_backgroundColor={GRAY_COLOR}
      trackColor={{
        // false: GRAY_COLOR,
        true: theme.colors.secondary
      }}
      value={value}
      {...prop}
    />
  );
}
