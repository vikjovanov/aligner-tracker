import { ColorInstance } from "color";
import { StyleSheet, View } from "react-native";
import Svg, {
  Defs,
  NumberProp,
  Rect,
  RadialGradient as RG,
  Stop,
} from "react-native-svg";

export type RadialGradientColorProps = {
  offset?: NumberProp;
  stopColor: ColorInstance;
};

export type RadialGradientProps = {
  cx?: NumberProp;
  cy?: NumberProp;
  color1: RadialGradientColorProps;
  color2: RadialGradientColorProps;
};

const RadialGradient = ({
  cx = "50%",
  cy = "50%",
  color1: { stopColor: stopColor1, offset: offsetColor1 },
  color2: { stopColor: stopColor2, offset: offsetColor2 },
}: RadialGradientProps) => {
  console.log(cx, cy, stopColor1, offsetColor1, stopColor2, offsetColor2);
  return (
    <View style={StyleSheet.absoluteFill}>
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
        <Defs>
          <RG
            id="radialGradient"
            gradientUnits="objectBoundingBox"
            cx={cx}
            cy={cy}
            r={1}
          >
            <Stop
              offset={offsetColor1 || "0"}
              stopColor={stopColor1.hex()}
              stopOpacity={1}
            />
            <Stop
              offset={offsetColor2 || "0.5"}
              stopColor={stopColor2.hex()}
              stopOpacity={1}
            />
          </RG>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#radialGradient)" />
      </Svg>
    </View>
  );
};

export default RadialGradient;
