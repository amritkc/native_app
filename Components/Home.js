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
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {db} from '../firebase/firebase-config';
import {collection, getDocs} from 'firebase/firestore/lite';
import BestProduct from './HomeComponents/BestProduct';
import YouMightLike from './HomeComponents/YouMightLike';
import {SliderBox} from 'react-native-image-slider-box';

const Home = ({navigation}) => {
  const [dataBest, setDataBest] = useState([]);
  const [dataYouMightLike, setDataYouMightLike] = useState([]);
  const [images, setimages] = useState([]);

  useEffect(() => {
    setimages([
      'https://assets.ajio.com/medias/sys_master/images/images/h4d/hfc/45789393911838/09122021-D-unisex-topbanner-p2-branddays-adidasoriginals-3050.jpg',
      'https://assets.ajio.com/medias/sys_master/images/images/hc0/h1e/45789393780766/09122021-D-unisex-topbanner-p2-branddays-campus-upto50.jpg',
      'https://picsum.photos/611/300',
      'https://picsum.photos/612/300',
    ]);
    GetDataBest();
    GetDatayoumightLike();
  }, []);

  const GetDataBest = async () => {
    const citiesCol = collection(db, 'posts');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    setDataBest(cityList);
  };
  const GetDatayoumightLike = async () => {
    const citiesCol = collection(db, 'youmightlike');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    setDataYouMightLike(cityList);
  };
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView>
        <Text style={styles.HeaderText}>Shoping Complex</Text>
        <YouMightLike value={dataYouMightLike} navigation={navigation} />
        <View style={styles.imageslide}>
          <SliderBox images={images} />
        </View>
        <View>
          <Text style={styles.bestProduct}>Best Product</Text>
        </View>
        <BestProduct value={dataBest} navigation={navigation} />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  HeaderText: {
    padding: 12,
    fontSize: 35,
    fontWeight: '700',
    color: 'black',
  },
  bestProduct: {
    marginTop: 16,
    paddingLeft: 12,
    fontSize: 22,
  },
  imageslide: {
    margin: 8,
  },
});

export default Home;
