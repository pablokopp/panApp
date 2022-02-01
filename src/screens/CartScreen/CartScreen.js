import {FlatList, Text, TouchableOpacity, View} from 'react-native';

import {CART} from '../../utils/data/cart';
import CartItem from '../../components/CartItem/CartItem';
import React from 'react';
import {styles} from './style';

const CartScreen = () => {
  const items = CART;
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const handleConfirm = () => {
    console.warn('confirm!');
  };
  const handleDelete = id => {
    console.warn('eliminar el item', id);
  };
  const renderCartItems = data => (
    <CartItem item={data.item} onDelete={handleDelete} />
  );
  return (
    <View style={styles.containerMain}>
      <View style={styles.container}>
        <FlatList
          data={items}
          renderItem={renderCartItems}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => handleConfirm()}
          style={styles.btnConfirm}>
          <Text style={styles.text1}>Confirmar Compra</Text>
          <Text style={styles.text2}>Total: ${total}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
