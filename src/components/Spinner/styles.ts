import { StyleSheet } from "react-native";
import { theme } from "../../theme/index";

export const styles = StyleSheet.create({
  tarefaContainer: {
    flex: 1,
    marginTop: 24,
    marginHorizontal: 22,
  },
  tarefaCriada: {
    color: theme.cores.secundaria,
    fontSize: theme.tamanho.md,
  },
});
