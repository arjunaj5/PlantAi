import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 19,
    backgroundColor: '#fff',
    shadowColor: '#b5b4ba',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 5,  
    elevation: 5,
    height:'25%',
    marginTop: 30,


    width: '100%'
  },

  newsCover: {
    width: '100%',
    height: '85%',
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderRadius: 3
  },
  newsTopic: {
    fontSize: 19,
    fontWeight: "bold"
  }
});

export default styles;