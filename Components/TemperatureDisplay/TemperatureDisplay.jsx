import { Text } from 'react-native'
import {s} from './TemperatureDisplay.style'

export default function TemperatureDisplay({value, unit}) {
  return (
    <Text style={s.display}>{value} {unit}</Text>
  )
}
