import { Text, View } from "react-native";
import { styles } from "./schedule.style.js";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../assets/constants/calendar.js";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Botao from "../../assets/components/botao/botao.jsx";

LocaleConfig.locales["pt-BR"] = ptBR;
LocaleConfig.defaultLocale="pt-BR";

function Schedule(){
  // 
  // Projeto Calendário (Data): https://github.com/wix/react-native-calendars
  // Projeto Pìcker (Hora)    : https://github.com/react-native-picker/picker

  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0,10));
  const [selectedHour, setSelectedHour] = useState(""); // Ficou desnecessário, porque o combobox já está armazendo a hora escolhida

  return <View style={styles.container}>
    <View>
      <Calendar 
        theme={styles.theme}
        onDayPress={(day) => {setSelectedDate(day.dateString)}}
        markedDates={{[selectedDate]: {selected: true}}}
        minDate={new Date().toDateString()}
        ></Calendar>

      <View>
        <Text style={styles.textHour} >
          Horário
        </Text>
      </View>

      <View style={styles.boxHour}>
        <Picker selectedValue={selectedHour}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedHour(itemValue)}}>
          <Picker.Item label="08:00" value="08:00" />
          <Picker.Item label="08:30" value="08:30" />
          <Picker.Item label="09:00" value="09:00" />
          <Picker.Item label="09:30" value="09:30" />
          <Picker.Item label="10:00" value="10:00" />
          <Picker.Item label="10:30" value="10:30" />
          <Picker.Item label="11:00" value="11:00" />
          <Picker.Item label="11:30" value="11:30" />
          <Picker.Item label="12:00" value="12:00" />
          <Picker.Item label="12:30" value="12:30" />
          <Picker.Item label="13:00" value="13:00" />
          <Picker.Item label="13:30" value="13:30" />
          <Picker.Item label="14:00" value="14:00" />
          <Picker.Item label="14:30" value="14:30" />
          <Picker.Item label="15:00" value="15:00" />
          <Picker.Item label="15:30" value="15:30" />
          <Picker.Item label="16:00" value="16:00" />
          <Picker.Item label="16:30" value="16:30" />
          <Picker.Item label="17:00" value="17:00" />
          <Picker.Item label="17:30" value="17:30" />
          <Picker.Item label="18:00" value="18:00" />
        </Picker>
      </View>
    </View>

    <View style={styles.botao}>
      <Botao text="Confirmar" theme='primary'></Botao>
    </View>

  </View>
}

export default Schedule;