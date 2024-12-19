import { Text, View, Image } from "react-native"
import { styles } from "./appointment.style";
import icon from "../../constants/icon";
import Botao from "../botao/botao";

function Appointment(props) {
  return <View style={styles.appointment}>

    {/* Container que vai conter o nome do médico, especialidade e o tipo de reserva */}
    <Text style={styles.name}>
      {props.service} - {props.doctor}
    </Text>
    <Text style={styles.specialty}> 
      {props.specialty} 
    </Text>

    {/* Container que vai comportar data e hora da reseva junto ao botão de cancelamento   */}
    <View style={styles.container}>

      <View style={styles.containerBooking}>
        {/* Data */}
        <View style={styles.booking}>
          <Image 
            style={styles.icon} 
            source={icon.calendar}>
          </Image>
          <Text style={styles.bookingDate}>15/10/2024</Text>
        </View>

        {/* Hora */}
        <View style={styles.booking}>
          <Image 
            style={styles.icon} 
            source={icon.clock}>
          </Image>
          <Text style={styles.bookingHour}>08:30</Text>
        </View>
      </View>

      {/* Botão Cancelar reserva */}
      <View style={styles.containerButton}>
        <Botao text="Cancelar" theme='danger'></Botao>
      </View>

    </View>




  </View>
}
export default Appointment;