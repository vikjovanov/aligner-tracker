import { UtiliesIcon } from "@/src/app/_layout";
import { colors, PADDING_UNIT } from "@/src/theme/theme";
import { AnimatedScalePressable } from "@/src/ui/AnimatedScalePressable";
import { StyleSheet, View } from "react-native";

const HeaderSection = () => {
  return (
    <View style={styles.header}>
      <AnimatedScalePressable onPress={() => alert("go to customizer")}>
        <UtiliesIcon name="edit" size={36} color={colors.white.hex()} />
      </AnimatedScalePressable>
    </View>
  );
};

export default HeaderSection;

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "flex-end",
    paddingVertical: PADDING_UNIT,
  },
});
