import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

function YouMightLike(props) {
  return (
    <View>
      <Text style={styles.texttop}>Top Deals On Fashion</Text>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {props.value.map((data, key) => {
          return (
            <TouchableOpacity
              style={styles.viewimage}
              onPress={() =>
                props.navigation.navigate('Product Details', data)
              }>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: data.img,
                }}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  texttop: {
    padding: 12,
    fontSize: 22,
  },
  viewimage: {
    backgroundColor: '#ffff',
    padding: 8,
    margin: 4,
    borderRadius: 12,
  },
  tinyLogo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
});

export default YouMightLike;
