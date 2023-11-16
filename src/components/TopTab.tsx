import {StyleSheet, Text, TouchableOpacity, View, Animated} from 'react-native';
import React from 'react';
import {FONTS, COLORS} from '../constants/constants';
import {scaleHeight, scaleWidth} from '../constants/scale';

const TopTab = ({...props}: StatsType) => {
  const tabs = Object.entries(props);
  const [[key]] = tabs;
  const [active, setActive] = React.useState<string>(key);
  const activeStat = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.headerContainer}>
      {tabs.map(([key, {icon}], index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              Animated.timing(activeStat, {
                toValue: 1,
                duration: 600,
                useNativeDriver: false,
              }).start();
              setActive(key);
            }}>
            <Animated.View style={styles.headerAnimatedView}>
              {icon}
              <Text style={styles.headerText}>{key}</Text>
              {active === key && (
                <Animated.View style={[styles.activeRectangle]} />
              )}
            </Animated.View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TopTab;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: scaleWidth(10),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.background3,
    height: scaleHeight(58),
  },
  headerAnimatedView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: scaleWidth(8),
    height: '100%',
    width: scaleWidth(118),
  },
  headerText: {
    ...FONTS.bold({fontSize: 17, lineHeight: 22}),
    color: COLORS.white,
    fontWeight: '600',
  },
  activeRectangle: {
    position: 'absolute',
    bottom: 0,
    width: scaleWidth(118),
    height: scaleHeight(4),
    backgroundColor: '#97A9F6',
    borderRadius: 30,
    shadowColor: '#97A9F6',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
  },
});
