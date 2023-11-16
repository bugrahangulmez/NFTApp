import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {scaleHeight, scaleWidth} from '../constants/scale';
import {FONTS, COLORS} from '../constants/constants';

const DropDown = ({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  categoryList,
  icon,
  right,
  left,
  top,
  bottom,
  position,
}: {
  marginTop?: number;
  marginLeft?: number;
  marginBottom?: number;
  marginRight?: number;
  categoryList: {title: string; icon?: React.JSX.Element}[];
  icon?: React.JSX.Element;
  right?: number;
  left?: number;
  top?: number;
  bottom?: number;
  position?: 'absolute' | 'relative';
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [title, setTitle] = React.useState(categoryList[0].title);

  const [data, setData] = React.useState<CategoryObj[]>(categoryList);

  const dropAnim = React.useRef(new Animated.Value(0)).current;

  return (
    <View
      style={[
        styles.container,
        {
          height: scaleHeight(44),
          marginTop: marginTop ? scaleHeight(marginTop) : 0,
          marginBottom: marginBottom ? scaleHeight(marginBottom) : 0,
          marginLeft: marginLeft ? scaleHeight(marginLeft) : 0,
          marginRight: marginRight ? scaleHeight(marginRight) : 0,
          position: position,
          left: left ? scaleWidth(left) : 'auto',
          top: top ? scaleHeight(top) : 0,
          bottom: bottom ? scaleHeight(bottom) : 0,
          right: right ? scaleWidth(right) : 'auto',
        },
      ]}>
      <TouchableOpacity
        style={[styles.buttonSelected]}
        onPress={() => {
          setIsOpen(prev => !prev);
          Animated.timing(dropAnim, {
            toValue: isOpen ? 0 : 1,
            duration: 500,
            useNativeDriver: false,
          }).start();
        }}>
        {icon}
        <Text style={styles.buttonSelectedText}>{title}</Text>
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.absoluteView,
          {
            width: scaleWidth(164),
            height: dropAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, data.length * scaleHeight(44)],
              extrapolate: 'clamp',
            }),
          },
        ]}>
        <FlatList
          data={data}
          contentContainerStyle={{
            gap: 2,
            flex: 1,
            backgroundColor: COLORS.background3,
            borderRadius: scaleWidth(30),
          }}
          renderItem={({item}) => {
            if (item.title === title) {
              return (
                <View style={styles.buttonCategory}>
                  <Text style={{color: 'black'}}>{item.title}</Text>
                </View>
              );
            }
            return (
              <TouchableOpacity
                style={styles.buttonCategory}
                onPress={() => {
                  Animated.timing(dropAnim, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: false,
                  }).start();
                  setTitle(item.title);
                  setIsOpen(false);
                }}>
                <Text style={{color: 'white'}}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </Animated.View>
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  container: {
    width: scaleWidth(164),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleWidth(30),
    borderWidth: 1,
    borderColor: COLORS.background3,
    backgroundColor: 'transparent',
  },
  absoluteView: {
    position: 'absolute',
    top: scaleHeight(44),
    borderRadius: scaleWidth(30),
    zIndex: 20,
  },
  buttonSelected: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: scaleWidth(30),
    flexDirection: 'row',
    gap: scaleWidth(8),
  },
  buttonSelectedText: {
    ...FONTS.regular({fontSize: 12, lineHeight: 13}),
    fontWeight: '600',
    color: COLORS.white,
  },
  buttonCategory: {
    height: scaleHeight(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleWidth(30),
    marginVertical: 1,
    flexDirection: 'row',
  },
});
