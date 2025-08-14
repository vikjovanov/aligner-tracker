import { UtiliesIcon } from "@/src/app/_layout";
import { colors, FONT_SIZE_UNIT, fonts, PADDING_UNIT } from "@/src/theme/theme";
import Button from "@/src/ui/Button";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import GoToHistoryButton from "../components/GoToHistoryButton";

const ActionsSection = ({ isBreak }: { isBreak: boolean }) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <View style={styles.section}>
      <View style={styles.actionContainer}>
        {!isBreak && (
          <Button
            outline
            label={t("tracker.actions.adjustTimer")}
            fullWidth
            icon={
              <UtiliesIcon
                name="adjust"
                size={20}
                color={colors.white.hex()}
                style={styles.adjustIcon}
              />
            }
            variant="primary"
          />
        )}
        {!isBreak && (
          <Button
            outline
            label={t("tracker.actions.pause")}
            fullWidth
            onPress={() => router.navigate("/take-a-break")}
            icon={
              <UtiliesIcon
                name="pause"
                size={22}
                color={colors.white.hex()}
                style={styles.pauseIcon}
              />
            }
            variant="danger"
          />
        )}
        {isBreak && false && (
          <Button
            outline
            label={t("tracker.actions.enableNotifications")}
            fullWidth
            icon={
              <UtiliesIcon
                name="bell"
                size={22}
                color={colors.white.hex()}
                style={styles.pauseIcon}
              />
            }
            variant="primary"
          />
        )}
        {isBreak && (
          <Text style={styles.notifyText}>
            {t("tracker.status.notifications.enabled")}
          </Text>
        )}
        {isBreak && (
          <Button
            outline
            label={t("tracker.actions.start")}
            fullWidth
            icon={
              <UtiliesIcon
                name="play"
                size={22}
                color={colors.white.hex()}
                style={styles.pauseIcon}
              />
            }
            variant="success"
          />
        )}
      </View>
      <View style={styles.historyLinkContainer}>
        <GoToHistoryButton />
      </View>
    </View>
  );
};

export default ActionsSection;

const styles = StyleSheet.create({
  section: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: PADDING_UNIT * 4,
  },
  actionContainer: {
    width: "100%",
    gap: PADDING_UNIT,
  },
  adjustIcon: {
    marginTop: -3,
  },
  pauseIcon: {
    marginTop: -1,
  },
  historyLinkContainer: {
    paddingTop: PADDING_UNIT * 5,
  },
  notifyText: {
    fontFamily: fonts.display,
    fontSize: FONT_SIZE_UNIT * 5,
    textAlign: "center",
    color: colors.white.hex(),
    paddingBottom: PADDING_UNIT * 2,
  },
});
