import { StyleSheet } from "react-native";
import { theme } from "../../theme/index";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.cores.neutro,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp("95%"),
    height: hp("20%"),
    paddingHorizontal: wp("2.5%"),
    paddingVertical: hp("1%"),
  },
  headerTitle: {
    fontSize: theme.fonte_size.titulo,
    color: theme.cores.preto,
    fontFamily: theme.font_family.bold,
    textAlign: "center",
  },
});
