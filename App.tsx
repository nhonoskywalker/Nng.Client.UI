import { SafeAreaView } from "react-native-safe-area-context";

import Login from "./app/screens/Login";
import AppText from "./app/components/AppText";
import CreateAccountSuccessPage from "./app/screens/CreateAccountSuccessPage";
import Signup from "./app/screens/Signup";
import Card from "./app/components/Card";
import ListingDetails from "./app/screens/ListingDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen
          name="AccountSuccessPage"
          component={CreateAccountSuccessPage}
        />
        <Stack.Screen name="ListingDetails" component={ListingDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
