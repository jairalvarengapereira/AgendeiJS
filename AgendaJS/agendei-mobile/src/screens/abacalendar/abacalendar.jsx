import { View, FlatList } from "react-native";
import { styles } from "./abacalendar.style";
import { appointments } from "../../assets/constants/data";
import Appointment from "../../assets/components/appointments/appointment";

function AbaCalendar(){
  return <View style={styles.container}>

    <FlatList 
      data={appointments} 
      keyExtractor={(appoint) => appoint.id_appointment}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return  <Appointment 
                  service={item.service}
                  doctor={item.doctor}
                  specialty={item.specialty}
                ></Appointment>
      }}/>
  </View>
}
export default AbaCalendar;