import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import icon from "../../assets/constants/icon.js";
import { styles } from "./account.style.js";
import Botao from "../../assets/components/botao/botao.jsx";

function Account(){
  return <View style={styles.container}>

    {/* Header */}
    <View>
      <Image source={icon.logo3} style={styles.logo} /> 
    </View>

    {/* Formulário */}
    <View>

      <View style={styles.containerInput}>
        <TextInput 
          placeholder="Nome" 
          style={styles.input} 
        />
      </View>

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

      <Botao text="Criar conta" />

    </View>

    {/* Footer */}
    <View style={styles.footer}>
      <Text >Já tenho conta.</Text>
      <TouchableOpacity>
        <Text style={styles.footerLink}> Fazer login.</Text>
      </TouchableOpacity>
    </View>
  </View>
}
export default Account;