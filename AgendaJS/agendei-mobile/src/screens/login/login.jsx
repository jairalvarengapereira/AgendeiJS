import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import icon from "../../assets/constants/icon.js";
import { styles } from "./login.style.js";
import Botao from "../../assets/components/botao/botao.jsx";

function Login(){
  return <View style={styles.container}>

    {/* Header */}
    <View>
      <Image source={icon.logo3} style={styles.logo} /> 
    </View>

    {/* Formulário */}
    <View>

      <View style={styles.containerInput}>
        <TextInput 
          placeholder="E-mail" 
          style={styles.input} 
        />
      </View>

      <View style={styles.containerInput}>
        <TextInput 
          placeholder="Senha" 
          style={styles.input} 
          secureTextEntry={true}  // esconde a senha
        />
      </View>

      <Botao text="Acessar" />

    </View>

    {/* Footer */}
    <View style={styles.footer}>
      <Text>Não tenho conta.</Text>
      <TouchableOpacity>
        <Text style={styles.footerLink}> Criar conta agora.</Text>
      </TouchableOpacity>
    </View>

  </View>
}
export default Login;