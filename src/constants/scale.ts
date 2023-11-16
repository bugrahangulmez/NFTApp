import {Dimensions} from 'react-native';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

export const scaleWidth = (x: number): number => (SCREEN_WIDTH / 390) * x;
export const scaleHeight = (x: number): number => (SCREEN_HEIGHT / 844) * x;
