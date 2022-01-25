import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '10%',
    paddingVertical: 10,
    borderRadius: 19,
    backgroundColor: '#d5f4da',
    shadowColor: '#b5b4ba',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 5,  
    elevation: 5,
    height:'25%',
    flexDirection: 'row',
    marginTop: 30
  },
  innerContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 25,
    color: '#7B7575',
  }
});

export default styles;
