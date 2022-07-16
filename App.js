import { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FrontScreen from './screens/FrontScreen';
import BackScreen from './screens/BackScreen';
import NumeralScreen from './screens/NumeralScreen';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  
  render(){
  
    return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={FrontScreen} />
        <Stack.Screen name="BackScreen" component={BackScreen}/>
        <Stack.Screen name="NumeralScreen" component={NumeralScreen}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}
}

const styles = StyleSheet.create({
  
});
