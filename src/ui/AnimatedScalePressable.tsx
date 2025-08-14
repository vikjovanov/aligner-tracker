import {
  Animated,
  GestureResponderEvent,
  Pressable,
  PressableProps,
} from "react-native";

type AnimatedScalePressableProps = PressableProps & {
  scale?: number;
  animationSpeed?: number;
};

export const AnimatedScalePressable = ({
  children,
  scale = 0.9,
  animationSpeed = 400,
  onPressIn,
  onPressOut,
  ...props
}: AnimatedScalePressableProps) => {
  const animation = new Animated.Value(0);
  const inputRange = [0, 1];
  const outputRange = [1, scale];
  const scaleAnimation = animation.interpolate({ inputRange, outputRange });

  const handlePressIn = (e: GestureResponderEvent) => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
      speed: animationSpeed,
    }).start();
    onPressIn?.(e);
  };

  const handlePressOut = (e: GestureResponderEvent) => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
      speed: animationSpeed,
    }).start();
    onPressOut?.(e);
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnimation }] }}>
      <Pressable
        {...props}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        {children}
      </Pressable>
    </Animated.View>
  );
};
