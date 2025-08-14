import { colors } from "@/src/theme/theme";
import { ColorInstance } from "color";
import { ButtonVariant } from "./ButtonBase";

export const BUTTON_BG_COLORS: Record<ButtonVariant, ColorInstance> = {
  primary: colors.primary,
  secondary: colors.white,
  success: colors.success,
  danger: colors.danger,
};

export const BUTTON_FG_COLORS: Record<ButtonVariant, ColorInstance> = {
  primary: colors.white,
  secondary: colors.black,
  success: colors.white,
  danger: colors.white,
};

export const BUTTON_HEIGHT = 70;
export const BUTTON_OUTLINE = 4;
export const BUTTON_OUTLINE_HEIGHT = BUTTON_HEIGHT + BUTTON_OUTLINE * 2;
export const BUTTON_PRESSED_HEIGHT = 64;
export const BUTTON_OUTLINE_PRESSED_HEIGHT =
  BUTTON_PRESSED_HEIGHT + BUTTON_OUTLINE * 2;
export const BUTTON_RADIUS = 15;
