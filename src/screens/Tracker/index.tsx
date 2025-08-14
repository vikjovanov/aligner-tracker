import { colors, PADDING_UNIT } from "@/src/theme/theme";
import RadialGradient from "@/src/ui/RadialGradient";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ActionsSection from "./sections/ActionsSection";
import CounterSection from "./sections/CounterSection";
import StatusSection from "./sections/StatusSection";

const TrackerScreen = () => {
  const [isBreak] = useState(false);

  return (
    <>
      <RadialGradient
        color1={{
          stopColor: isBreak
            ? colors.redGradient.color1
            : colors.blueGradient.color1,
        }}
        color2={{
          stopColor: isBreak
            ? colors.redGradient.color2
            : colors.blueGradient.color2,
        }}
      />
      <SafeAreaView style={styles.screen}>
        <View style={styles.counterSection}>
          <CounterSection isBreak={isBreak} />
        </View>
        <View style={styles.illustrationSection}>
          <StatusSection isBreak={isBreak} />
        </View>
        <View style={styles.actionsSection}>
          <ActionsSection isBreak={isBreak} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default TrackerScreen;

const styles = StyleSheet.create({
  screen: {
    height: "100%",
  },
  counterSection: {
    flex: 180,
    paddingHorizontal: PADDING_UNIT * 3,
  },
  illustrationSection: {
    borderTopColor: colors.white.hex(),
    borderTopWidth: 5,
    flex: 240,
    paddingHorizontal: PADDING_UNIT * 3,
  },
  actionsSection: {
    borderTopColor: colors.white.hex(),
    borderTopWidth: 5,
    flex: 325,
    paddingHorizontal: PADDING_UNIT * 3,
  },
});
