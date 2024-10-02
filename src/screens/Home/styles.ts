import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: theme.colors.secondary,
    fontFamily: theme.font_family.bold,
    fontSize: theme.font_size.lg,
  },
});
