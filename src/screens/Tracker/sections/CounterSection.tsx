import RankIcon from "@/assets/icons/outline/Rank_1.png";
import { colors, FONT_SIZE_UNIT, fonts, PADDING_UNIT } from "@/src/theme/theme";
import ProgressBar from "@/src/ui/ProgressBar";
import { useTranslation } from "react-i18next";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  isBreak: boolean;
};

const CounterSection = ({ isBreak }: Props) => {
  const { t } = useTranslation();

  return (
    <View style={styles.section}>
      <Text style={styles.counter}>20:03:43</Text>
      <View style={styles.progressBarContainer}>
        <View>
          <ProgressBar
            max={100}
            value={50}
            color={isBreak ? colors.danger : colors.success}
          />
          <View style={[styles.rankIconContainer]}>
            <Image
              source={RankIcon}
              resizeMode="contain"
              width={56}
              height={56}
              style={[styles.rankIconImage, isBreak && styles.hidden]}
            />
          </View>
          <View style={[styles.woreTodayContainer]}>
            <Text style={[styles.woreToday, !isBreak && styles.hidden]}>
              {t("tracker.counter.woreToday")} 17:32:02
            </Text>
          </View>
        </View>
        <Text style={[styles.progressBarNotice, isBreak && styles.hidden]}>
          {t("tracker.counter.notice")}
        </Text>
      </View>
    </View>
  );
};

export default CounterSection;

const styles = StyleSheet.create({
  section: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: PADDING_UNIT * 2,
  },
  counter: {
    fontFamily: fonts.display,
    fontSize: FONT_SIZE_UNIT * 22,
    color: colors.white.hex(),
  },
  progressBarContainer: {
    width: "100%",
    paddingHorizontal: PADDING_UNIT * 6,
  },
  progressBarNotice: {
    fontFamily: fonts.display,
    color: colors.white.hex(),
    fontSize: FONT_SIZE_UNIT * 4,
    paddingTop: PADDING_UNIT / 2,
  },
  rankIconContainer: {
    position: "absolute",
    top: 0,
    right: -30,
    left: 0,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  rankIconImage: {
    width: 56,
    height: 56,
    transform: [{ rotate: "6deg" }],
  },
  woreTodayContainer: {
    position: "absolute",
    top: -22,
    right: 0,
    left: 0,
    bottom: 0,
    alignItems: "flex-end",
  },
  woreToday: {
    fontFamily: fonts.display,
    color: colors.white.hex(),
    fontSize: FONT_SIZE_UNIT * 4,
  },
  hidden: {
    opacity: 0,
  },
});
