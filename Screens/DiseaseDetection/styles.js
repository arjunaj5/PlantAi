import { StyleSheet } from "react-native";

const styles = StyleSheet.create( {
  image: {
    width: 80,
    height: 80
  },
  container: {
    justifyContent: "space-evenly",
    flexDirection: 'row',
    alignItems: "center",
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    alignItems: "center",
    backgroundColor: '#fff',
    width: '35%',
    padding: 10,
    borderRadius: 19,
  },
  text: {
    fontSize:12
  }
} )

export default styles;