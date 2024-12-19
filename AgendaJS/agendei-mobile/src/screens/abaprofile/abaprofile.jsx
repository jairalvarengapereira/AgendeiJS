import { View, Text } from "react-native";
import { styles } from "./abaprofile.style";


function AbaProfile(){
  return <View style={styles.container}>

    {/* Nome */}
    <View style={styles.item}>
      <Text style={styles.title}>Nome:</Text>
      <Text style={styles.text}>Jair Alvarenga Pereira</Text>
    </View>

    {/* Email */}
    <View style={styles.item}>
      <Text style={styles.title}>E-mail:</Text>
      <Text style={styles.text}>jairalvarengapereira@gmail.com</Text>
    </View>

  </View>
}

export default AbaProfile;