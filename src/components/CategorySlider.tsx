import {
  StyleSheet,
  Text,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SCREEN_WIDTH, scaleHeight, scaleWidth} from '../constants/scale';
import {FONTS, COLORS} from '../constants/constants';

const CategorySlider = ({
  categories,
  marginTop,
}: {
  categories: Category[];
  marginTop?: number;
}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <Animated.FlatList
      style={{
        marginTop: marginTop ? scaleHeight(marginTop) : scaleHeight(27),
      }}
      horizontal
      data={categories}
      centerContent={true}
      snapToInterval={SCREEN_WIDTH}
      decelerationRate={'fast'}
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
        useNativeDriver: false,
      })}
      scrollEventThrottle={16}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity activeOpacity={1}>
            <Animated.View
              style={[
                styles.categoryContainer,
                {
                  left: scrollX.interpolate({
                    inputRange: [
                      (index - 1) * SCREEN_WIDTH,
                      index * SCREEN_WIDTH,
                      (index + 1) * SCREEN_WIDTH,
                    ],
                    outputRange: [scaleWidth(-145), 0, scaleWidth(145)],
                    extrapolate: 'clamp',
                  }),
                  transform: [
                    {
                      scale: scrollX.interpolate({
                        inputRange: [
                          (index - 1) * SCREEN_WIDTH,
                          index * SCREEN_WIDTH,
                          (index + 1) * SCREEN_WIDTH,
                        ],
                        outputRange: [0.85, 1, 0.85],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                  opacity: scrollX.interpolate({
                    inputRange: [
                      (index - 1) * SCREEN_WIDTH,
                      index * SCREEN_WIDTH,
                      (index + 1) * SCREEN_WIDTH,
                    ],
                    outputRange: [0.4, 1, 0.4],
                    extrapolate: 'clamp',
                  }),
                },
              ]}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
            </Animated.View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default CategorySlider;

const styles = StyleSheet.create({
  categoryContainer: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: scaleWidth(252),
    height: scaleHeight(167),
    borderRadius: scaleWidth(30),
  },
  title: {
    position: 'absolute',
    bottom: scaleHeight(9.14),
    left: 0,
    textAlign: 'center',
    width: '100%',
    ...FONTS.regular({fontSize: 20, lineHeight: 25}),
    letterSpacing: scaleWidth(0.32),
    color: COLORS.white,
    fontWeight: '700',
  },
});
