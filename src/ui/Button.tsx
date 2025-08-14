import { FONT_SIZE_UNIT, fonts, PADDING_UNIT } from "@/src/theme/theme";
import { JSX } from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { BUTTON_FG_COLORS } from "./ButtonBase.const";

export type ButtonProps = Omit<ButtonBaseProps, "content"> & {
  label?: string;
  icon?: JSX.Element;
};

const Button = ({
  icon,
  label,
  variant = "primary",
  ...btnProps
}: ButtonProps) => {
  return (
    <ButtonBase
      {...btnProps}
      variant={variant}
      content={
        <View style={styles.btnContainer}>
          {icon}
          {label && (
            <Text
              style={[
                styles.btnLabel,
                {
                  color: BUTTON_FG_COLORS[variant].hex(),
                },
              ]}
            >
              {label}
            </Text>
          )}
        </View>
      }
    />
  );
};

export default Button;

export const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: PADDING_UNIT * 1.5,
  },
  btnLabel: {
    fontFamily: fonts.base,
    fontWeight: "900",
    textTransform: "uppercase",
    fontSize: FONT_SIZE_UNIT * 5,
  },
});
