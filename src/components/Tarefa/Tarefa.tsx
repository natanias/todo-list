import { Container, TarefaTexto, TarefaFeita, SetaTarefa } from "./styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { TouchableOpacity, View } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

type PropsTarefa = {
  title: string;
  show: boolean;
  status: boolean;
  onTaskPress: () => void;
  onCheckPress: () => void;
  onShowPress: () => void;
};

export function Tarefa({
  title,
  show,
  status,
  onTaskPress,
  onCheckPress,
  onShowPress,
}: PropsTarefa) {
  return (
    <View>
      <Container onPress={onTaskPress} status={status} show={show}>
        <TarefaFeita onPress={onCheckPress}>
          <MaterialCommunityIcons
            name={status ? "checkbox-marked" : "checkbox-blank"}
            size={24}
            color={status ? "#17e517" : "#939090"}
            hitSlop={50}
          />
        </TarefaFeita>
        <TarefaTexto>{title}</TarefaTexto>
        <SetaTarefa onPress={onShowPress} hitSlop={50}>
          <MaterialIcons name="keyboard-arrow-up" size={24} color="#939090" />
        </SetaTarefa>
      </Container>
      {show ? (
        <View
          style={{
            backgroundColor: "#ccc",
            height: 200,
            width: 370,
            margin: 2,
          }}
        ></View>
      ) : null}
    </View>
  );
}
