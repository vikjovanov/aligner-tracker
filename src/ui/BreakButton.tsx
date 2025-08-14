import { colors, FONT_SIZE_UNIT, fonts, PADDING_UNIT } from "@/src/theme/theme";
import dayjs from "dayjs";
import durationPlugin from "dayjs/plugin/duration.js";
import { JSX } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";

dayjs.extend(durationPlugin);

export type BreakButtonProps = Omit<
  ButtonBaseProps,
  "content" | "variant" | "fullwidth"
> & {
  label: string;
  icon: JSX.Element;
  durationInMinutes?: number;
};

const BreakButton = ({
  icon,
  label,
  durationInMinutes,
  ...btnProps
}: BreakButtonProps) => {
  const { t } = useTranslation();

  const formatDuration = () => {
    if (!durationInMinutes) return null;

    const duration = dayjs.duration(durationInMinutes, "minutes");

    if (durationInMinutes < 60) {
      return duration.format(t("ui.button.break.duration.format.minutes"));
    }
    return duration.format(t("ui.button.break.duration.format.hours"));
  };

  return (
    <ButtonBase
      {...btnProps}
      variant="secondary"
      content={
        <View style={styles.btnContainer}>
          <View style={styles.contentContainer}>
            {icon}
            {label && (
              <Text numberOfLines={2} style={styles.label}>
                {label}
              </Text>
            )}
          </View>
          <Text style={styles.duration}>{formatDuration()}</Text>
        </View>
      }
    />
  );
};

export default BreakButton;

export const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: PADDING_UNIT * 2,
    paddingHorizontal: PADDING_UNIT * 2,
  },
  contentContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    gap: PADDING_UNIT * 1.5,
  },
  label: {
    fontFamily: fonts.base,
    fontWeight: "900",
    color: colors.black.hex(),
    fontSize: FONT_SIZE_UNIT * 5,
    flexShrink: 1,
  },
  duration: {
    fontFamily: fonts.base,
    fontWeight: "900",
    color: colors.black.hex(),
    fontSize: FONT_SIZE_UNIT * 6,
  },
});
