import Categories from '../screens/CategoriesScreen/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import ProductDetails from '../screens/ProductDetailScreen/ProductDetailScreen';
import Products from '../screens/ProductsScreen/ProductsScreen';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ShopNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Product Detail" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigation;
