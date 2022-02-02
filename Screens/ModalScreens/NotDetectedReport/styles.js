import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold"
  },
  commentsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 75
  },
  commentsTextInput: {
    borderWidth: 1,
    borderColor: '#FCffff',
    backgroundColor: '#FCEEEE',
    width: '60%',
    borderRadius: 5,
  }
})

export default styles