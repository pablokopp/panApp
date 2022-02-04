import {SafeAreaView, Text, View} from 'react-native';

import React from 'react';
import styles from './style';
import {useSelector} from 'react-redux';

const ProductDetailScreen = ({navigation}) => {
  const bread = useSelector(state => state.breads.selected);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerProd}>
        <Text style={styles.text1}>{bread.name}</Text>
        <Text style={styles.text3}>{bread.description}</Text>
        <View style={styles.container2}>
          <Text style={styles.text2}>{bread.weight}</Text>
          <Text style={styles.text2}>$ {bread.price}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
