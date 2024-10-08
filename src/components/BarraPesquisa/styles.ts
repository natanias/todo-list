import { StyleSheet } from "react-native";
import { theme } from "../../theme/index";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: theme.cores.extra,
    borderRadius: 4,
    alignItems: "center",
    width: wp("90%"),
    height: hp("6%"),
    paddingHorizontal: wp("2.5%"),
    paddingVertical: hp("1%"),
    marginHorizontal: wp("5%"),
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#E8F1F2",
    marginLeft: 10,
  },
  icon: {
    marginLeft: 5,
  },
});
