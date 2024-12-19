import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./botao.style";

function Botao(props) {
  function testeClick(){
    Alert.alert("clicou");
  }
  return <TouchableOpacity 
    onPress={testeClick} 

    style={[styles.btn,
      props.theme =='danger' ? styles.danger : styles. primary
    ]}>

    <Text style={styles.text}>
      {props.text}
    </Text>
  </TouchableOpacity>
}
export default Botao;