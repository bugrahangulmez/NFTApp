import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const PlusSvg = (props: SvgProps) => (
  <Svg width={148} height={156} fill="none" {...props}>
    <G filter="url(#a)">
      <Path
        fill="#fff"
        fillOpacity={0.7}
        d="M69 46.887a10 10 0 0 1 10 0l23.775 13.726a10 10 0 0 1 5 8.66v27.454c0 3.572-1.906 6.873-5 8.66L79 119.113a9.997 9.997 0 0 1-10 0l-23.775-13.726a10.001 10.001 0 0 1-5-8.66V69.273a10 10 0 0 1 5-8.66L69 46.887Z"
        // shapeRendering="crispEdges"
        // style={{
        //   mixBlendMode: 'overlay',
        // }}
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default PlusSvg;
