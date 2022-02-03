import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create( {
  boxShadow: {
    shadowColor: '#b5b4ba',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 5,  
    elevation: 5,
  },
  
  button: {
    borderTopLeftRadius: 100,
    borderRadius: 5,
    width: 120
  },
  buttonText: {
    fontWeight: "bold"
  }
} );

export default globalStyles