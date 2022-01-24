import {Button, SafeAreaView, Text, View} from 'react-native';

import React from 'react';
import styles from './style';
import {theme} from '../../constants/colors';

const CategoriesScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>CATEGORIES</Text>
        <Button
          title="go to products"
          onPress={() => navigation.navigate('Products')}
          color={theme.colorPrimary}
        />
      </View>
    </SafeAreaView>
  );
};

export default CategoriesScreen;
