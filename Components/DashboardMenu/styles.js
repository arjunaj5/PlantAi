import { StyleSheet } from "react-native";
import globalStyles from "../../globalStyles";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 13,
    paddingBottom: 22,
    marginTop: 35
  },
  menu: {
    flexDirection: "row",
    justifyContent: 'flex-start',
  },
  pressable: {
    backgroundColor: '#EAEAEA',
    padding: 10,
  },
  dashboard: {
    backgroundColor: '#fff',
    minHeight: '90%',
    borderRadius:20,
    borderTopLeftRadius: 0,
    paddingHorizontal: 23,
    paddingVertical:50,
    ...StyleSheet.flatten(globalStyles.boxShadow)
  }
})

export default styles;