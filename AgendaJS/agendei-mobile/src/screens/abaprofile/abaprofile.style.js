import { COLORs, FONT_SIZE } from "../../assets/constants/theme.js"

export const styles = {
  container:{
    backgroundColor: COLORs.white,
    flex: 1,
    padding: 12
  },

  item:{
    borderWidth: 1,
    borderColor: COLORs.gray4,
    paddingLeft: 8,
    paddingTop: 15,
    paddingBottom: 15,
  },

  title:{
    fontSize: FONT_SIZE.sm,
    color: COLORs.gray3,
    marginBottom: 4,
    // marginleft: 8
  },

  text:{
    fontSize: FONT_SIZE.md,
    color: COLORs.gray1,
    // marginBottom: 4,
    // marginleft: 10
  },


}