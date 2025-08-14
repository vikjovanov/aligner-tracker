import { Illustrations } from "@/assets/illustrations";
import { colors, FONT_SIZE_UNIT, fonts, PADDING_UNIT } from "@/src/theme/theme";
import { useTranslation } from "react-i18next";
import { Image, StyleSheet, Text, View } from "react-native";
import SpinShiner from "../components/SpinShiner";

const StatusSection = ({ isBreak }: { isBreak: boolean }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.section}>
      {!isBreak && (
        <View style={[styles.shinerContainer]}>
          <SpinShiner />
        </View>
      )}

      <View style={styles.statusContainer}>
        <Image
          source={
            isBreak
              ? Illustrations.friedEgg_outline
              : Illustrations.aligner_outline
          }
          style={styles.statusImage}
          resizeMode="contain"
        />
        {!isBreak ? (
          <Text style={styles.statusText}>
            {t("tracker.status.aligner.on")}
          </Text>
        ) : (
          <Text style={styles.statusText}>Going to eat</Text>
        )}
        {isBreak && (
          <View style={styles.subStatusContainer}>
            <Text style={styles.subStatusText}>
              {t("tracker.status.aligner.off")}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default StatusSection;

const styles = StyleSheet.create({
  section: {
    width: "100%",
    height: "100%",
    position: "relative",
    borderTopColor: colors.white.hex(),
  },
  shinerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "150deg" }],
  },
  statusContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: PADDING_UNIT * 2,
  },
  statusImage: { height: 136 },
  statusTextContainer: {
    alignItems: "center",
    gap: 3,
  },
  statusText: {
    fontFamily: fonts.display,
    color: colors.white.hex(),
    fontSize: FONT_SIZE_UNIT * 8,
  },
  subStatusContainer: {
    position: "absolute",
    bottom: PADDING_UNIT * 1.3,
  },
  subStatusText: {
    fontFamily: fonts.display,
    color: colors.white.hex(),
    fontSize: FONT_SIZE_UNIT * 5,
  },
  hidden: {
    opacity: 0,
  },
});
