import {SafeAreaView, Text, View} from 'react-native';

import React from 'react';
import styles from './style';

const ProductDetailScreen = ({navigation, route}) => {
  const {product} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerProd}>
        <Text style={styles.text1}>{product.name}</Text>
        <Text style={styles.text3}>{product.description}</Text>
        <View style={styles.container2}>
          <Text style={styles.text2}>{product.weight}</Text>
          <Text style={styles.text2}>$ {product.price}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
