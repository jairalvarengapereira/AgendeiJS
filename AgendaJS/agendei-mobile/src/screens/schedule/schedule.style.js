import { COLORs, FONT_SIZE } from "../../assets/constants/theme.js"

export const styles = {
  container:{
    flex: 1,
    backgroundColor: COLORs.white,
    justifyContent: "space-between",
    marginBottom:20,
  },

  textHour:{
    fontSize: FONT_SIZE.lg,
    fontweight: "bold",
    color: COLORs.gray2,
    marginTop: 20,
    marginLeft: 15,
  },

  boxHour:{
    marginLeft: 15,
    marginRight: 15,
  },

  botao:{
    marginLeft: 15,
    marginRight: 15,
  }
}