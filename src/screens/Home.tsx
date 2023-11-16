import {ScrollView, StyleSheet, View} from 'react-native';
import {COLORS} from '../constants/constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CategorySlider, Header, NTFSlider} from '../components';
import {scaleHeight, scaleWidth} from '../constants/scale';

const Home = () => {
  const insets = useSafeAreaInsets();

  const categories: Category[] = [
    {
      title: 'Music',
      image: require('../assets/images/categories/spotify.png'),
    },
    {
      title: 'Art',
      image: require('../assets/images/categories/art2.png'),
    },
    {
      title: 'Virtual Worlds',
      image: require('../assets/images/categories/virtual_worlds.png'),
    },
  ];
  const trendingNftList: NFT[] = [
    {
      title: '3D Art',
      image: require('../assets/images/collections/3d_art.png'),
      likes: 234,
    },
    {
      title: 'Abstract Art',
      image: require('../assets/images/collections/abstract_art.png'),
      likes: 152,
    },
    {
      title: 'Metaverse',
      image: require('../assets/images/collections/metaverse.png'),
      likes: 25,
    },
    {
      title: 'Portrait Art',
      image: require('../assets/images/collections/portrait_art.png'),
      likes: 13,
    },
  ];
  const topSellersNftList: NFT[] = [
    {
      title: 'Abstract Art',
      image: require('../assets/images/topSellers/abstract_pink.png'),
      likes: 234,
    },
    {
      title: 'Abstract',
      image: require('../assets/images/topSellers/abstract23.png'),
      likes: 152,
    },
    {
      title: 'Ball',
      image: require('../assets/images/topSellers/ball.png'),
      likes: 25,
    },
    {
      title: 'Beer',
      image: require('../assets/images/topSellers/beer.png'),
      likes: 13,
    },
    {
      title: 'Music',
      image: require('../assets/images/topSellers/music.png'),
      likes: 254,
    },
    {
      title: 'Ring',
      image: require('../assets/images/topSellers/ring.png'),
      likes: 142,
    },
    {
      title: 'Wave',
      image: require('../assets/images/topSellers/wave.png'),
      likes: 354,
    },
    {
      title: 'Wave 2',
      image: require('../assets/images/topSellers/wave2.png'),
      likes: 512,
    },
  ];

  return (
    <ScrollView style={[styles.container]}>
      <View style={{paddingBottom: scaleHeight(100)}}>
        {/* Background styling start */}
        <View style={styles.dot1} />
        <View style={styles.dot2} />
        {/* Background styling end */}
        <Header
          title="NFT Marketplace"
          color={COLORS.white}
          marginTop={insets.top}
          fontWeight="700"
          fontSize={28}
          lineHeight={33.41}
          letterSpacing={0.36}
        />
        <CategorySlider categories={categories} />
        <Header
          title="Trending collections"
          color={COLORS.white}
          textAlign="left"
          marginTop={30}
          marginLeft={16}
          fontWeight="600"
        />
        <NTFSlider nftList={trendingNftList} />
        <Header
          title="Top seller"
          color={COLORS.white}
          textAlign="left"
          marginTop={30}
          marginLeft={16}
          fontWeight="600"
        />
        <NTFSlider nftList={topSellersNftList} marginBottom={15} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  dot1: {
    width: scaleWidth(215),
    height: scaleWidth(215),
    borderRadius: 300,
    backgroundColor: '#0C445B',
    position: 'absolute',
    top: scaleHeight(344),
    left: scaleWidth(-300),
    shadowColor: '#0C445B',
    shadowOffset: {
      width: 400,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 64,
  },
  dot2: {
    width: scaleWidth(215),
    height: scaleWidth(215),
    borderRadius: 300,
    backgroundColor: '#420C5B',
    position: 'absolute',
    top: scaleHeight(574),
    right: scaleWidth(-400),
    shadowColor: '#420C5B',
    shadowOffset: {
      width: -400,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 64,
  },
});
