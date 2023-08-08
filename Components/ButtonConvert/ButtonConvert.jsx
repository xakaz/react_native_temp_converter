import { Text, TouchableOpacity } from "react-native";
import {s} from "./ButtonConvert.style";

export default function ButtonConvert({ unit, onPress }) {
  return (
    <TouchableOpacity style={s.button} onPress={onPress}>
      <Text style={s.text}>Convertir en {unit}</Text>
    </TouchableOpacity>
  );
}
