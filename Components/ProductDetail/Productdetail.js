import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

function Productdetail({navigation, route}) {
  // console.log(route.params);
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.Viewitem}>
        <Text style={styles.textTittle}>{route.params.tittle}</Text>
        <View style={styles.viewimage}>
          <Image
            style={styles.imageDec}
            source={{
              uri: route.params.img,
            }}
          />
        </View>
        <Text style={styles.pricedec}>Rs.{route.params.price}</Text>
        <Text style={styles.descriptionData}>
          Rs.{route.params.description}
        </Text>
      </View>
    </ScrollView>
  );
}
const windowWidth = Dimensions.get('window').width - 30;
const windowheight = Dimensions.get('window').height - 60;
const styles = StyleSheet.create({
  Viewitem: {
    height: windowheight,
    backgroundColor: '#ffff',
  },
  textTittle: {
    padding: 8,
    fontSize: 30,
    fontWeight: '600',
    color: 'black',
  },
  viewimage: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#FFFFFF',
  },
  imageDec: {
    width: windowWidth,
    height: 300,
    resizeMode: 'contain',
  },
  pricedec: {
    color: 'black',
    fontSize: 26,
    padding: 8,
  },
  descriptionData: {
    fontSize: 18,
    padding: 8,
  },
});

export default Productdetail;
