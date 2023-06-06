import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import UserScreen from './src/Screens/UserScreen';
import AddressScreen from './src/Screens/AddressScreen';
import ProfileScreen from './src/Screens/ProfileScreen'
import {MyContextProvider} from './src/Components/MyContext';
const Stack = createNativeStackNavigator();
const NavigationScreen = () => {
  return (
    <NavigationContainer>
    <MyContextProvider>
      <Stack.Navigator initialRoute='UserScreen' screenOptions={{ header: () => null }}>
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name='Address' component={AddressScreen} />
        <Stack.Screen name='ProfileImage' component={ProfileScreen} />
      </Stack.Navigator>
      </MyContextProvider>
    </NavigationContainer>
  )
}

export default NavigationScreen
