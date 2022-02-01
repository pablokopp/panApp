import {Button, FlatList, SafeAreaView, Text, View} from 'react-native';

import {CATEGORIES} from '../../utils/data/categories';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import React from 'react';
import styles from './style';
import {theme} from '../../constants/colors';

const CategoriesScreen = ({navigation}) => {
  const handleSelectedCategory = item => {
    //le estoy pasando a la vista por parametros distinta data, luego esto lo recibo en la vista como route.params
    navigation.navigate('Products', {
      categoryID: item.id,
      name: item.title,
    });
  };
  const renderCategoryItem = ({item}) => {
    return <CategoryItem item={item} onSelected={handleSelectedCategory} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={CATEGORIES}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};
{
  /* <Button
          title="go to products"
          onPress={() => navigation.navigate('Products')}
          color={theme.colorPrimary}
        /> */
}
export default CategoriesScreen;
