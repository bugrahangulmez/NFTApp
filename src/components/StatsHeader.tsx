import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../constants/constants';
import {Header} from '../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scaleHeight, scaleWidth} from '../constants/scale';
import ThreeDotSvg from '../svg/ThreeDotSvg';

export default function StatsHeader({title}: {title: string}) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.headerContainer, {marginTop: insets.top}]}>
      <Header
        title={title}
        color={COLORS.white}
        fontSize={20}
        lineHeight={24}
        fontWeight="600"
        textAlign="center"
        marginTop={0}
      />
      <TouchableOpacity style={styles.threeDot}>
        <ThreeDotSvg />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  headerContainer: {
    flexDirection: 'row',
    height: scaleHeight(74),
    justifyContent: 'center',
    alignItems: 'center',
  },
  threeDot: {
    position: 'absolute',
    right: scaleWidth(16),
  },
});
