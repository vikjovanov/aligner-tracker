import { colors } from "@/src/theme/theme";
import { JSX } from "react";
import { Pressable, PressableProps, StyleSheet, View } from "react-native";
import {
  BUTTON_BG_COLORS,
  BUTTON_OUTLINE,
  BUTTON_OUTLINE_HEIGHT,
  BUTTON_OUTLINE_PRESSED_HEIGHT,
  BUTTON_RADIUS,
} from "./ButtonBase.const";

export type ButtonVariant = "primary" | "secondary" | "success" | "danger";

export type ButtonBaseProps = PressableProps & {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  outline?: boolean;
  content: JSX.Element;
};

const ButtonBase = ({
  variant = "primary",
  fullWidth = false,
  outline = false,
  content,
  onPressIn,
  onPressOut,
  style,
  ...rest
}: ButtonBaseProps) => {
  return (
    <Pressable
      {...rest}
      style={(data) => [
        styles.btnContainer,
        {
          width: fullWidth ? "100%" : "auto",
        },
        typeof style === "function" ? style(data) : style,
      ]}
    >
      {({ pressed }) => (
        <View
          style={[
            styles.btnBase,
            {
              height: pressed
                ? BUTTON_OUTLINE_PRESSED_HEIGHT
                : BUTTON_OUTLINE_HEIGHT,
              borderColor: outline ? colors.white.hex() : "transparent",
              backgroundColor: outline ? colors.white.hex() : "transparent",
            },
          ]}
        >
          <View
            style={[
              styles.btnBottomLayer,
              {
                backgroundColor: BUTTON_BG_COLORS[variant]
                  .rotate(3.7)
                  .saturate(-0.16)
                  .darken(0.16)
                  .hex(),
                paddingBottom: pressed ? 0 : 6,
              },
            ]}
          >
            <View
              style={[
                {
                  backgroundColor: BUTTON_BG_COLORS[variant].hex(),
                },
                styles.btnTopLayer,
              ]}
            >
              {content}
            </View>
          </View>
        </View>
      )}
    </Pressable>
  );
};

export default ButtonBase;

export const styles = StyleSheet.create({
  btnContainer: {
    height: BUTTON_OUTLINE_HEIGHT,
    minWidth: BUTTON_OUTLINE_HEIGHT,
    justifyContent: "flex-end",
  },
  btnBase: {
    borderWidth: BUTTON_OUTLINE,
    borderRadius: BUTTON_RADIUS,
  },
  btnBottomLayer: {
    borderRadius: BUTTON_RADIUS,
  },
  btnTopLayer: {
    height: "100%",
    borderRadius: BUTTON_RADIUS,
  },
});
