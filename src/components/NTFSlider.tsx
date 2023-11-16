import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {scaleHeight, scaleWidth} from '../constants/scale';
import {COLORS, FONTS} from '../constants/constants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

const NTFSlider = ({
  nftList,
  marginTop,
  marginLeft,
  marginBottom,
}: {
  nftList: NFT[];
  marginTop?: number;
  marginLeft?: number;
  marginBottom?: number;
}) => {
  return (
    <FlatList
      style={{
        marginTop: marginTop ? scaleHeight(marginTop) : scaleHeight(8),
        marginLeft: marginLeft ? scaleWidth(marginLeft) : 0,
        marginBottom: marginBottom ? scaleHeight(marginBottom) : 0,
      }}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={nftList}
      renderItem={({item}) => {
        return (
          <TouchableOpacity activeOpacity={1}>
            <BlurView blurAmount={10} blurType="dark" style={styles.container}>
              <Image source={item.image} style={styles.image} />
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  paddingHorizontal: scaleWidth(10),
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.nftName}>{item.title}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: scaleWidth(5),
                  }}>
                  <FontAwesomeIcon icon={faHeart} style={{color: 'red'}} />
                  <Text style={styles.likes}>{item.likes}</Text>
                </View>
              </View>
            </BlurView>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default NTFSlider;

const styles = StyleSheet.create({
  container: {
    width: scaleWidth(175),
    height: scaleHeight(216),
    borderRadius: scaleWidth(30),
    marginHorizontal: scaleWidth(5),
    alignItems: 'center',
    paddingTop: scaleWidth(10),
    borderWidth: 1,
    borderColor: COLORS.background3,
    justifyContent: 'space-between',
    paddingBottom: scaleWidth(20),
  },
  image: {
    width: scaleWidth(155),
    height: scaleWidth(155),
    borderRadius: scaleWidth(22),
  },
  nftName: {
    ...FONTS.semibold({fontSize: 13, lineHeight: 18}),
    fontWeight: '600',
    color: COLORS.white,
  },
  likes: {
    ...FONTS.regular({fontSize: 13, lineHeight: 13}),
    color: COLORS.grey,
  },
});
