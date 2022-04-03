import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding:20,
    borderRadius: 19,
    // backgroundColor: '#d5f4da',
    backgroundColor: 'rgba(157,223,168,.5)',
    shadowColor: 'rgba(157,223,168,.1)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 5,  
    elevation: 5,
    minHeight:240,
    flexDirection: 'column',
    marginTop: 30
  },
  topContainer: {
    flexDirection: "row"
  },
  middleContainer: {
    marginVertical: 20
  },
  bottomContainer: {
    flexDirection: "row"
  },
  box: {
    padding: 10,
    borderRadius: 15,
    marginLeft:16,
    flex: 1,
    minHeight: 70,
    justifyContent: "center",
    opacity:.8
  },
  mainText: {
    fontWeight: "bold",
    color: '#000'
  },
  bigText: {
    fontSize: 30
  },
  boxText: {
    textAlign: "center"
  },
  weatherIcon: {
    width: 45,
    height: 45
  },
  minTempStyle: {
    marginLeft: 15,
    padding:5,
    borderRadius:10,
    fontWeight: "bold",
    backgroundColor: '#fff',
    fontSize: 12
  }
});

export default styles;
