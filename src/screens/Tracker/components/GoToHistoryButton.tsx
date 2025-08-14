import { UtiliesIcon } from "@/src/app/_layout";
import { colors, FONT_SIZE_UNIT, fonts, PADDING_UNIT } from "@/src/theme/theme";
import { AnimatedScalePressable } from "@/src/ui/AnimatedScalePressable";
import { useTranslation } from "react-i18next";
import { PressableProps, StyleSheet, Text, View } from "react-native";

const GoToHistoryButton = ({
  onPressIn,
  onPressOut,
  ...props
}: PressableProps) => {
  const { t } = useTranslation();

  return (
    <AnimatedScalePressable {...props}>
      <View style={styles.historyLinkPressable}>
        <Text style={styles.historyLink}>
          {t("tracker.actions.goToHistory")}
        </Text>
        <UtiliesIcon name="caret-wide" color={colors.white.hex()} size={27} />
      </View>
    </AnimatedScalePressable>
  );
};

export default GoToHistoryButton;

const styles = StyleSheet.create({
  historyLinkPressable: {
    alignItems: "center",
    gap: PADDING_UNIT,
  },
  historyLink: {
    fontFamily: fonts.display,
    fontSize: FONT_SIZE_UNIT * 6,
    color: colors.white.hex(),
  },
});
