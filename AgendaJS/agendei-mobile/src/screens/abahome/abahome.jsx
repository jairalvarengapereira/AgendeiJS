import { View, Text, FlatList } from "react-native";
import { styles } from "./abahome.style";
import { doctors } from "../../assets/constants/data";
import icon from "../../assets/constants/icon";
import Doctor from "../../assets/components/doctor/doctor";

function AbaHome(){
  return <View style={styles.container}>
    <Text style={styles.text}>Agende os seus serviços médicos</Text>

    <FlatList 
      data={doctors} 
      keyExtractor={(doc) => doc.id_doctor}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return <Doctor
          name={item.name}
          icon={item.icon == "M" ? icon.male : icon.female}
          specialty={item.specialty}
        />
      }}/>
  </View>
}
export default AbaHome;