import { COLORs, FONT_SIZE } from "../../assets/constants/theme.js"

export const styles = {
  container:{
    backgroundColor: COLORs.white,
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
    padding: 50
  },

  containerLogo:{
    alignItems: "center",
  },

  containerInput:{
    marginBottom: 15,
  },

  logo:{
    width: 100,
    height: 120,
  },

  input:{
    backgroundColor: COLORs.gray5,
    padding:10,
    borderRadius:6,
  },

  footer:{
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 1
  },

  footerLink:{
    color: COLORs.blue2,
  }

}