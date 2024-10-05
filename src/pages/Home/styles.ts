import { StyleSheet } from "react-native";
import { theme } from "../../theme/index";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    backgroundColor: theme.cores.neutro,
    marginTop: hp("5%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp("95%"),
    height: hp("10%"),
  },
});
