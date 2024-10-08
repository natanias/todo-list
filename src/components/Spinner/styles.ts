import { StyleSheet } from "react-native";
import { theme } from "../../theme/index";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  tarefaContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  tarefaCriada: {
    color: theme.cores.secundaria,
    fontSize: 14,
  },
  counterContainer: {
    backgroundColor: theme.cores.terciaria,
    width: wp("5%"),
    height: hp("2.2%"),
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  counterText: {
    color: theme.cores.neutro,
    fontSize: theme.fonte_size.corpo,
  },
});
