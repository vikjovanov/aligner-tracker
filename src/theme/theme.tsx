import Color from "color";

export const colors = {
  green: Color("#03CEA4"),
  blue: Color("#37B9FF"),
  red: Color("#F95D74"),
  black: Color("#001B2B"),
  white: Color("#ffffff"),
  blueGradient: {
    color1: Color("#00D7BF"),
    color2: Color("#00A1FF"),
  },
  redGradient: {
    color1: Color("#FBB040"),
    color2: Color("#EF4136"),
  },

  get primary() {
    return this.blue;
  },

  get success() {
    return this.green;
  },

  get danger() {
    return this.red;
  },
};

export const fonts = {
  base: "Gotham",
  display: "Digitalt",
};

export const PADDING_UNIT = 8;
export const FONT_SIZE_UNIT = 4;
