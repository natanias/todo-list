import { Feather } from "@expo/vector-icons";
import { InputButton } from "./styles";

export function InputTarefa() {
  return (
    <InputButton>
      <Feather name="plus" size={24} color="white" />
    </InputButton>
  );
}
