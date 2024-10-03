import { StyleSheet } from "react-native";
import { theme } from "../../theme/index";

export const styles = StyleSheet.create({
  tarefaContainer: {
    flex: 1,
    marginTop: 5,
    flexDirection: "row",
  },
  tarefaCriada: {
    color: theme.cores.secundaria,
    fontSize: theme.tamanho.md,
  },
  counterContainer: {
    backgroundColor: theme.cores.terciaria,
    width: 25,
    height: 19,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  counterText: {
    color: theme.cores.degrade,
    fontSize: theme.tamanho.sm,
  },
});
