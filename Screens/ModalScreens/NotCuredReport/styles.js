import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 30
  },

  commentsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8
  },
  detailText: {
    fontWeight: "bold",
    color: '#3BA776'
  },
  commentsTextInput: {
    borderWidth: 1,
    borderColor: '#FCffff',
    backgroundColor: '#FCEEEE',
    width: '60%',
    borderRadius: 5,
    color: '#3BA776'
  },
  container: {
    justifyContent: "space-around",
    flexDirection: 'row',
    alignItems: "center",
    width: '90%',
    height: '60%'
  },
  leafImage: {
    width: 200,
    height: 200
  },
  boxOne: {
    alignItems: "center",
    backgroundColor: '#fff',
    width: '70%',
    height:'40%',
    padding: 10,
    borderColor: '#FCffff',
    backgroundColor:'lightgrey'
  },
  boxTwo: {
    alignItems: "center",
    backgroundColor: '#fff',
    width: '60%',
    height:'40%',
    padding: 10, 
    borderColor: '#FCffff',
    backgroundColor: '#FCEEEE'
  },
  // image: {
  //   width: 80,
  //   height: 80
  // }
})

export default styles