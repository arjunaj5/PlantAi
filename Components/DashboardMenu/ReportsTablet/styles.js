import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECDCDC',
    height: 68,
    marginBottom: 55,
    borderRadius: 10,
    padding: 10,
  },
  status: {
    backgroundColor: '#3BA776',
    width:'30%',
    height: '50%',
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 50
  },
  statusText: {
    color: '#fff'
  }
})

export default styles;