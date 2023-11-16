import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Plus2Svg = (props: SvgProps) => (
  <Svg width={44} height={44} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M9.432 22.424c0 1.23.996 2.226 2.226 2.226h8.13v8.13c0 1.216.982 2.227 2.212 2.227 1.23 0 2.227-1.01 2.227-2.227v-8.13h8.13a2.22 2.22 0 0 0 0-4.439h-8.13v-8.129A2.235 2.235 0 0 0 22 9.855a2.222 2.222 0 0 0-2.212 2.227v8.13h-8.13c-1.23 0-2.226.996-2.226 2.212Z"
    />
  </Svg>
);
export default Plus2Svg;
