import {Text} from 'react-native';
import {SCREEN_WIDTH, scaleHeight, scaleWidth} from '../constants/scale';
import {COLORS} from '../constants/constants';

const Header = ({
  title,
  marginTop,
  textAlign,
  marginLeft,
  fontSize,
  lineHeight,
  letterSpacing,
  color,
  width,
  fontWeight,
}: {
  title: string;
  marginTop?: number;
  textAlign?: 'center' | 'left' | 'right';
  marginLeft?: number;
  fontSize?: number;
  lineHeight?: number;
  letterSpacing?: number;
  color: string;
  width?: number;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}) => {
  return (
    <Text
      style={{
        color: color ? color : COLORS.white,
        width: width ? scaleWidth(width) : SCREEN_WIDTH,
        textAlign: textAlign ? textAlign : 'center',
        fontSize: fontSize ? scaleWidth(fontSize) : scaleWidth(20),
        marginTop: marginTop ? scaleHeight(marginTop) : 0,
        marginLeft: marginLeft ? scaleWidth(marginLeft) : 0,
        lineHeight: lineHeight ? scaleHeight(lineHeight) : scaleWidth(24),
        letterSpacing: letterSpacing
          ? scaleWidth(letterSpacing)
          : scaleWidth(0.38),
        fontWeight: fontWeight ? fontWeight : 'normal',
      }}>
      {title}
    </Text>
  );
};

export default Header;
