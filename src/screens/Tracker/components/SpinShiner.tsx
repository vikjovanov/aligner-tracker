import ShinerImage from "@/assets/images/Shiner.png";
import { useEffect, useRef } from "react";
import { Animated, Easing, Image } from "react-native";

const SpinShiner = () => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const spinInputRange = [0, 1];
  const spinOutputRange = ["0deg", "360deg"];
  const spin = spinValue.interpolate({
    inputRange: spinInputRange,
    outputRange: spinOutputRange,
  });

  const scaleValue = useRef(new Animated.Value(0)).current;
  const scaleInputRange = [0, 1];
  const scaleOutputRange = [0.9, 1.1];
  const scale = scaleValue.interpolate({
    inputRange: scaleInputRange,
    outputRange: scaleOutputRange,
  });

  const shinerLoop = Animated.parallel([
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 20000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ),
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ),
  ]);

  useEffect(() => {
    shinerLoop.start();

    return () => shinerLoop.stop();
  }, [shinerLoop]);

  return (
    <Animated.View style={[{ transform: [{ rotate: spin }, { scale }] }]}>
      <Image source={ShinerImage} />
    </Animated.View>
  );
};

export default SpinShiner;
