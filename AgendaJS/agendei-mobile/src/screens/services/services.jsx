import { View, Text, FlatList, Image } from "react-native";
import { styles } from "./services.style";
import icon from "../../assets/constants/icon";
import { doctors_services } from "../../assets/constants/data";
import Service from "../../assets/components/service/service";


function Services(){
  return <View style={styles.container}>
    <View style={styles.banner}>
      <Image source={icon.female} style={styles.logo} />
      <Text style={styles.name}>Jair</Text>
      <Text style={styles.specialty}>Pediatria</Text>
    </View>
    
    <FlatList 
      data={doctors_services} 
      keyExtractor={(serv) => serv.id_service}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return <Service 
          description={item.description}
          price={item.price}
        />
      }}/>
  </View>
}
export default Services;