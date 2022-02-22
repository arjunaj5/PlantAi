import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  subContainer: {
    marginTop: 20
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 30,
  },
  commentsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15
  },
  detailText: {
    fontWeight: "bold",
    color: '#3BA776'
  },
  leafImage: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 20
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#FCffff',
    minWidth: 180,
    maxWidth:300,
    backgroundColor:'#FCEEEE',
    height: 30,
    borderRadius: 5,
    color: '#3BA776'
  },
  checkbox: {
    marginBottom: 20
  },
  errorText: {
    marginBottom: 10,
    color: 'red'
  }
})

export default styles;