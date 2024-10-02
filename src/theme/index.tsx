import { ThemeProvider } from "styled-components/native";
export const theme = {
  colors: {
    primary: "#13293D", // Cor principal, geralmente usada para ações ou destaque.
    secondary: "#006494", // Cor secundária, para suportar a primária.
    accent: {
      // Acentos para destaque ou interatividade.
      light: "#1B98E0", // Um tom mais claro para acentuar.
      dark: "#247BA0", // Um tom mais escuro, mas ainda relacionado ao acento.
    },
    neutral: "#E8F1F2", // Cor neutra para fundos ou componentes menos destacados.
    black: "#000000", // Preto puro, normalmente para texto ou contrastes fortes.
  },
  font_size: {
    xs: 12,
    sm: 13,
    md: 18,
    lg: 20,
    xl: 32,
  },
  font_family: {
    regular: "Roboto_400Regular",
    bold: "Roboto_700Bold",
    medium: "Roboto_500Medium",
  },
};
