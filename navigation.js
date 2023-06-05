import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserPage from "./src/Screens/UserPage";
import AddressPage from "./src/Screens/AddressPage";
import ProfileImage from "./src/Screens/ProfileImage";


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Userpage" screenOptions={{ header: () => null }}>
        <Stack.Screen name='Userpage' component={UserPage} />
        <Stack.Screen name='Address' component={AddressPage} />
        <Stack.Screen name='ProfileImage' component={ProfileImage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
