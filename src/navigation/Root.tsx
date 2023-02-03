import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Types/navigationTypes";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Screens/Home/Home";
import Detail from "../Screens/AstroidDetail/AstroidDetail";

const Stack = createNativeStackNavigator<RootStackParamList>();

class ReactNavigation extends React.Component {
  render(): React.ReactNode {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default ReactNavigation;
