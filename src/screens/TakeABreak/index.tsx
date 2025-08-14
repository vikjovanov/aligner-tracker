import { UtiliesIcon } from "@/src/app/_layout";
import { colors, FONT_SIZE_UNIT, fonts, PADDING_UNIT } from "@/src/theme/theme";
import Button from "@/src/ui/Button";
import RadialGradient from "@/src/ui/RadialGradient";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BreaksList from "./sections/BreaksList";
import HeaderSection from "./sections/HeaderSection";

const TakeABreakScreen = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <>
      <RadialGradient
        color1={{
          stopColor: colors.blueGradient.color1,
        }}
        color2={{
          stopColor: colors.blueGradient.color2,
        }}
      />
      <SafeAreaView style={styles.screen}>
        <HeaderSection />
        <View style={styles.titleSection}>
          <Text style={styles.title}>{t("takeABreak.title")}</Text>
          <Text style={styles.subtitle}>{t("takeABreak.subtitle")}</Text>
        </View>
        <View style={styles.actionsSection}>
          <BreaksList />
        </View>
        <View style={styles.footer}>
          <Button
            variant="secondary"
            outline
            style={{ opacity: 0.8 }}
            icon={<UtiliesIcon name="times" size={25} />}
            onPress={() => router.back()}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default TakeABreakScreen;

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: PADDING_UNIT * 3,
    flex: 1,
  },
  titleSection: {
    paddingVertical: PADDING_UNIT,
  },
  title: {
    fontFamily: fonts.display,
    fontSize: FONT_SIZE_UNIT * 22,
    lineHeight: FONT_SIZE_UNIT * 18,
    textAlign: "center",
    color: colors.white.hex(),
  },
  subtitle: {
    fontFamily: fonts.display,
    fontSize: FONT_SIZE_UNIT * 5,
    textAlign: "center",
    color: colors.white.hex(),
    paddingHorizontal: PADDING_UNIT * 3,
  },
  actionsSection: {
    flex: 1,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: PADDING_UNIT * 6,
    paddingTop: PADDING_UNIT * 3,
  },
});
