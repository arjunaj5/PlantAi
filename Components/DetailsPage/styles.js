import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: '85%',
    height: '90%',
    backgroundColor: 'white',
    borderBottomRightRadius: 19,
    borderBottomLeftRadius: 19
  },
  contentContainer: {
    justifyContent: "flex-start",
    flexDirection: 'column',
    alignItems: "center",
  },
  newsPic: {
      width: 289,
      height: 186,
      borderRadius: 19
    },
  imageContainer: {
    paddingTop: 30,
  },
  text:{
      padding: 30,
  },
  heading: {
    fontSize: 19,
    fontWeight: "700",
    paddingVertical: 20
  },
  para: {
      fontSize: 19,
      fontWeight: "400"
  }

})

export default styles