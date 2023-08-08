import { ImageBackground, Text, View } from "react-native";
import { s } from "./App.style";
import hotBackground from "./assets/hot.png";
import InputTemperature from "./Components/InputTemperature/InputTemperature";
import TemperatureDisplay from "./Components/TemperatureDisplay/TemperatureDisplay";
import { useState } from "react";
import { DEFAULT_TEMP, UNITS, DEFAULT_UNIT } from "./constant";
import { getOppositeUnit, convertTemperatureTo } from "./services/temperature-services";
import ButtonConvert from "./Components/ButtonConvert/ButtonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMP);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const oppositeUnit = getOppositeUnit(currentUnit);

  function getConvertedTemp(){
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat) ? "" : convertTemperatureTo(oppositeUnit, valueAsFloat).toFixed(1)
  }

  return (
    <ImageBackground style={s.container} source={hotBackground}>
      <View style={s.workspace}>
        <TemperatureDisplay
          value={getConvertedTemp()}
          unit={oppositeUnit}
        />
        <InputTemperature
          defaultValue={DEFAULT_TEMP}
          onChangeText={setInputValue}
        />
        <View>
          <ButtonConvert/>
        </View>
      </View>
    </ImageBackground>
  );
}
