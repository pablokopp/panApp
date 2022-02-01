import {Button, FlatList, SafeAreaView, Text, View} from 'react-native';

import {BREADS} from '../../utils/data/breads';
import ProductItem from '../../components/ProductItem/ProductItem';
import React from 'react';
import styles from './style';

const ProductsScreen = ({navigation, route}) => {
  const handleSelectedProduct = item => {
    //le estoy pasando a la vista por parametros distinta data, luego esto lo recibo en la vista como route.params
    navigation.navigate('Product Detail', {
      productID: item.id,
      name: item.name,
      product: item,
    });
  };
  const renderProductItem = ({item}) => {
    return <ProductItem item={item} onSelected={handleSelectedProduct} />;
  };
  const filteredBreads = BREADS.filter(
    bread => bread.category === route.params.categoryID,
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {filteredBreads.length > 0 ? (
          <FlatList
            data={filteredBreads}
            renderItem={renderProductItem}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text style={styles.textNo}>No hay productos en esta categoria</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProductsScreen;
