import {FlatList, Text, View} from 'react-native';

import {ORDERS} from '../../../utils/data/order';
import OrderItem from '../../components/OrderItem/OrderItem';
import React from 'react';
import {styles} from './style';

const OrderScreen = () => {
  const items = ORDERS;
  const renderOrderItems = data => <OrderItem item={data.item} />;
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={items}
          renderItem={renderOrderItems}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default OrderScreen;
