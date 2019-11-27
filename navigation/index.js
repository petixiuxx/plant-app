import React from "react";
import { Image } from "react-native";
import { createNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { theme } from "../constants";

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
// import Setting from '../screens/Setting'
import Forgot from "../screens/Forgot";
// import Explore from '../screens/Explore'
import Browse from "../screens/Browse";
// import Product from '../screens/Product'

const screen = createStackNavigator(
  {
    Welcome,
    Login,
    SignUp,
    // Setting,
    Forgot,
    // Explore,
    Browse
    // Product
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: theme.colors.white, // or 'white
        borderBottomColor: "transparent",
        elevation: 0 // for android only
      },
      headerBackImage: <Image source={require("../assets/icons/back.png")} />,
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: "center",
        marginLeft: theme.sizes.base, //for iOS multiply the value by 2
        paddingRight: theme.sizes.base
      },
      headerRightContainerStyle: {
        alignItems: "center",
        paddingRight: theme.sizes.base
      }
    }
  }
);

export default createAppContainer(screen);
