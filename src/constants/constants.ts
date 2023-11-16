import type {TextStyle} from 'react-native';

export const COLORS = {
  background: '#211134',
  background3: '#5D457A',
  button: '#97A9F6',
  neuButton: '#32D74B',
  shadow: '#452A7C',
  shadowDark: '#000000',
  shadowLight: '#ffffff',
  white: '#ffffff',
  grey: '#EBEBF599',
};

export const FONTS = {
  regular: (args?: TextStyle): TextStyle => {
    return {
      fontSize: args?.fontSize ?? 13,
      lineHeight: args?.lineHeight ?? 13,
      fontFamily: 'Inter-Regular',
    };
  },
  semibold: (args?: TextStyle): TextStyle => {
    return {
      fontSize: args?.fontSize ?? 17,
      lineHeight: args?.lineHeight ?? 22,
      fontFamily: 'Inter-SemiBold',
    };
  },
  bold: (args?: TextStyle): TextStyle => {
    return {
      fontSize: args?.fontSize ?? 28,
      lineHeight: args?.lineHeight ?? 33.41,
      fontFamily: 'Inter-Bold',
    };
  },
};
