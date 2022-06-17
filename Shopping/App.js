import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CreateShoppingList from './components/CreateShoppingList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShoppingListScreen from './screens/ShoppingListScreen'
import HomeScreen from './screens/HomeScreen';


export default function App() {

  const NativeStack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <NativeStack.Navigator>
    <NativeStack.Screen
      name='HomeScreen'
      component={HomeScreen}
      />
    
    <NativeStack.Screen
      name='ShoppingListScreen'
      component={ShoppingListScreen}
      />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
