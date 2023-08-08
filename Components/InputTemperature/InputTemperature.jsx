import { TextInput, Text, View } from "react-native";
import { s } from "./InputTemperature.style";

export default function InputTemperature({onChangeText, defaultValue, unit}) {
  return (
    <View style={s.container}>
      <TextInput
        style={s.input}
        placeholder="Tape une température"
        keyboardType="numbers-and-punctuation"
        maxLength={4}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
      />
      <Text style={s.unit}>{unit}</Text>
    </View>
  );
}
