import { TextInput, Text, View } from "react-native";
import { s } from "./InputTemperature.style";

export default function InputTemperature({onChangeText, defaultValue}) {
  return (
    <View style={s.container}>
      <TextInput
        style={s.input}
        placeholder="Tape une température"
        keyboardType="numeric"
        maxLength={4}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
      />
      <Text style={s.unit}>°C</Text>
    </View>
  );
}
