import { StyleSheet } from "react-native";

const styles = StyleSheet.create( {
  image: {
    width: 100,
    height: 100
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    height: '90%'
  },
  imageContainer: {
    alignItems: "center",
    backgroundColor: '#fff',
    width: '55%',
    padding: 10,
    borderRadius: 19,
  },
  text: {
    fontSize:12
  },
  activityIndicator: {
    position: "absolute",
    zIndex: 2,
    left: 0,
    right: 0,
    bottom: 30,
    alignItems: 'center',
    justifyContent: 'center'

  }
} )

export default styles;