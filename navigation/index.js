import { Image } from 'react-native'
import { createNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Welcome from '../screens/Welcome'
// import Login from '../screens/Login'
// import SignUp from '../screens/SignUp'
// import Setting from '../screens/Setting'
// import Forgot from '../screens/Forgot'
// import Explore from '../screens/Explore'
// import Browse from '../screens/Browse'
// import Product from '../screens/Product'

const screen = createStackNavigator({
    Welcome,
    // Login,
    // SignUp,
    // Setting,
    // Forgot,
    // Explore,
    // Browse,
    // Product
})

export default createAppContainer(screen);
