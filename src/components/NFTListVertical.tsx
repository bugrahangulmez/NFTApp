import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {scaleHeight, scaleWidth} from '../constants/scale';
import {FONTS, COLORS} from '../constants/constants';

const NFTListVertical = ({nftList}: {nftList: NFT[]}) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        data={nftList}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity style={styles.nftButton} activeOpacity={0.95}>
              <Text style={styles.id}>{index + 1}</Text>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>{item.price}</Text>
                <Text
                  style={[
                    styles.rate,
                    {color: (item.rate as number) > 0 ? 'green' : 'red'},
                  ]}>
                  {item.rate}%
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default NFTListVertical;

const styles = StyleSheet.create({
  container: {
    width: scaleWidth(358),
    backgroundColor: 'rgba(93,69,122,0.2)',
    left: scaleWidth(16),
    right: scaleWidth(16),
    marginTop: scaleHeight(30),
    borderRadius: scaleWidth(30),
    borderWidth: 1,
    borderColor: COLORS.background3,
    height: scaleHeight(440),
    zIndex: -10,
  },
  contentContainer: {
    paddingVertical: scaleHeight(16),
  },
  image: {
    width: scaleWidth(44),
    height: scaleWidth(44),
    borderRadius: scaleWidth(10),
  },
  nftButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scaleHeight(11),
  },
  id: {
    color: COLORS.grey,
    marginRight: scaleWidth(10),
  },
  title: {
    width: scaleWidth(358 * 0.45),
    marginLeft: scaleWidth(15),
    ...FONTS.bold({fontSize: 17, lineHeight: 22, fontWeight: '600'}),
    color: COLORS.white,
  },
  priceContainer: {
    width: scaleWidth(358 * 0.2),
    alignItems: 'flex-end',
  },
  price: {
    color: COLORS.white,
  },
  rate: {},
});
