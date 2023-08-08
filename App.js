import { ImageBackground, Text, View } from "react-native";
import { s } from "./App.style";
import hotBackground from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import InputTemperature from "./Components/InputTemperature/InputTemperature";
import TemperatureDisplay from "./Components/TemperatureDisplay/TemperatureDisplay";
import { useEffect, useState } from "react";
import { DEFAULT_TEMP, UNITS, DEFAULT_UNIT } from "./constant";
import {
  getOppositeUnit,
  convertTemperatureTo,
  isIceTemperature,
} from "./services/temperature-services";
import ButtonConvert from "./Components/ButtonConvert/ButtonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMP);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const [currentBackground, setCurrentBackground] = useState();
  const oppositeUnit = getOppositeUnit(currentUnit);

  function getConvertedTemp() {
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat)
      ? ""
      : convertTemperatureTo(oppositeUnit, valueAsFloat).toFixed(1);
  }

  useEffect(() => {
    const temperatureAsFloat = Number.parseFloat(inputValue);
    if (!isNaN(temperatureAsFloat)) {
      const isColdBackground = isIceTemperature(inputValue, currentUnit);
      setCurrentBackground(isColdBackground ? coldBackground : hotBackground);
    }
  }, [inputValue, currentUnit]);

  return (
    <ImageBackground style={s.container} source={currentBackground}>
      <View style={s.workspace}>
        <TemperatureDisplay value={getConvertedTemp()} unit={oppositeUnit} />
        <InputTemperature
          defaultValue={DEFAULT_TEMP}
          onChangeText={setInputValue}
          unit={currentUnit}
        />
        <View>
          <ButtonConvert
            unit={currentUnit}
            onPress={() => setCurrentUnit(oppositeUnit)}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
