import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Components/Home';
import Productdetail from './Components/ProductDetail/Productdetail';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="E-Kart">
        <Stack.Screen name="E-Kart" component={Home} />
        <Stack.Screen name="Product Details" component={Productdetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
