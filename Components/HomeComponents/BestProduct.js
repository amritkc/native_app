import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

function BestProduct(props) {
  return (
    <View style={styles.row}>
      {props.value.map((data, key) => {
        return (
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate('Product Details', data)}>
            <Text style={styles.textTittle}>{data.tittle}</Text>
            <Image
              style={styles.ProductImage}
              source={{
                uri: data.img,
              }}
            />
            <Text style={styles.buttonprice}>Rs. {data.price}</Text>
            <Text numberOfLines={3} style={styles.description}>
              {data.description}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    minHeight: 280,
    maxHeight: 280,
    minWidth: 150,
    maxWidth: 150,
    marginTop: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    borderRadius: 12,
    minWidth: '48%',
    textAlign: 'center',
  },
  ProductImage: {
    height: 100,
    width: 150,
    maxHeight: 100,
    resizeMode: 'contain',
  },
  textTittle: {
    width: 130,
    minHeight: 65,
    maxHeight: 65,
    fontSize: 20,
    color: 'black',
    padding: 6,
  },
  buttonprice: {
    padding: 8,
    fontWeight: '900',
  },
  description: {},
});

export default BestProduct;
