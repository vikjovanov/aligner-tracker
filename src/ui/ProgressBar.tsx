import { colors } from "@/src/theme/theme";
import { ColorInstance } from "color";
import { StyleSheet, View } from "react-native";

export type ProgressBarProps = {
  value: number;
  max: number;
  color: ColorInstance;
  size?: "thin" | "regular";
};

export const PROGRESS_BAR_REGULAR_HEIGHT = 20;
export const PROGRESS_BAR_THIN_HEIGHT = 5;
export const REGULAR_OUTLINE = 3;
export const THIN_OUTLINE = 2;

const ProgressBar = ({
  value,
  max,
  color,
  size = "regular",
}: ProgressBarProps) => {
  const progressBarDefaultHeight =
    size === "regular" ? PROGRESS_BAR_REGULAR_HEIGHT : PROGRESS_BAR_THIN_HEIGHT;
  const progressBarDefaultOutline =
    (size === "regular" ? REGULAR_OUTLINE : THIN_OUTLINE) * 2;
  const progressBarHeight =
    progressBarDefaultHeight + progressBarDefaultOutline;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.base,
          {
            borderWidth: size === "regular" ? 3 : 2,
            height: progressBarHeight,
          },
        ]}
      >
        <View
          style={[
            styles.progress,
            {
              width: `${(value / max) * 100}%`,
              backgroundColor: color.hex(),
            },
          ]}
        ></View>
      </View>
    </View>
  );
};

export default ProgressBar;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  base: {
    backgroundColor: colors.white.hex(),
    borderRadius: 100,
    width: "100%",
    overflow: "hidden",
    borderColor: colors.white.hex(),
  },
  progress: {
    position: "absolute",
    inset: 0,
  },
});
