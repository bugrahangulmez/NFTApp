import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {FONTS, COLORS} from '../constants/constants';
import {
  scaleHeight,
  scaleWidth,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../constants/scale';
import {BlurView} from '@react-native-community/blur';

const Onboarding = ({
  setOnboardingStatus,
}: {
  setOnboardingStatus: (string: 'active' | 'done') => void;
}) => {
  console.log({SCREEN_WIDTH, SCREEN_HEIGHT});
  return (
    <ImageBackground
      source={require('../assets/images/onboarding/onboarding.png')}
      style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>
          {'Welcome to           NFT Marketplace'}
        </Text>
      </View>
      <BlurView blurType="light" blurAmount={10} style={styles.blurView}>
        <View style={styles.textContainer}>
          <Text style={styles.descHeader}>Explore and Mint NFTs</Text>
          <Text style={styles.desc}>
            You can buy and sell the NFTs of the best artists in the world.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setOnboardingStatus('done')}>
          <BlurView style={styles.buttonBlurView}>
            <Text style={styles.buttonText}>Get started now</Text>
          </BlurView>
        </TouchableOpacity>
      </BlurView>
    </ImageBackground>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    width: 299 * 1.12,
    left: 26.13 * 1.12,
    right: 26.13 * 1.12,
    marginTop: 80 * 1.12,
  },
  header: {
    ...FONTS.bold({fontSize: 36.04, lineHeight: 43.01}),
    fontWeight: '900',
    color: COLORS.white,
  },
  blurView: {
    width: 306 * 1.12,
    height: 191 * 1.12,
    borderRadius: 27 * 1.12,
    position: 'absolute',
    top: 498 * 1.12,
    left: 26.13 * 1.12,
    right: 26.13 * 1.12,
    borderWidth: 1.12,
    borderColor: 'rgba(255,255,255,0.2)',
    padding: 27 * 1.12,
    alignItems: 'center',
    gap: 30,
    backgroundColor: 'rgba(93,69,122,0.2)',
  },
  textContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descHeader: {
    ...FONTS.bold({fontSize: 20, lineHeight: 25}),
    letterSpacing: 0.32 * 1.12,
    color: COLORS.white,
    fontWeight: '600',
  },
  desc: {
    ...FONTS.regular({fontSize: 12, lineHeight: 16}),
    textAlign: 'center',
    color: COLORS.grey,
  },
  buttonBlurView: {
    width: 198 * 1.12,
    height: 45 * 1.12,
    borderRadius: 25,
    paddingVertical: 13 * 1.12,
    paddingHorizontal: 18 * 1.12,
    backgroundColor: 'rgba(93,69,122,0.5)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
  },
  button: {
    flex: 1,
    borderRadius: 33.5 * 1.12,
  },
  buttonText: {
    ...FONTS.regular({fontSize: 15, lineHeight: 20}),
    color: COLORS.white,
    textAlign: 'center',
  },
});
