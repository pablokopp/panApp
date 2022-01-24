import {Button, SafeAreaView, Text, View} from 'react-native';

import React from 'react';
import styles from './style';
import {theme} from '../../constants/colors';

const ProductsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>PRODUCT SCREEN</Text>
        <Button
          title="go to product detail"
          onPress={() => navigation.navigate('Product Detail')}
          color={theme.colorPrimary}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductsScreen;
