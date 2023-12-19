import { configureFonts } from "react-native-paper";

const baseFont = {
  fontFamily: "Roboto-Regular",
} as const;

const baseVariants = configureFonts({ config: baseFont });

const customVariants = {
  displayMedium: {
    ...baseVariants.displayMedium,
    fontFamily: "Roboto-Bold",
  },
  bold: {
    ...baseVariants.bodyMedium,
    fontFamily: "Roboto-Bold",
  },
  styled: {
    ...baseVariants.headlineLarge,
    fontFamily: "Pacifico",
  },
} as const;

const fonts = configureFonts({
  config: {
    ...baseVariants,
    ...customVariants,
  },
});

export default fonts;
