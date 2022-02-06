import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container:{
        justifyContent:"space-around",
        flexDirection:"column",
        alignItems:"center",
        paddingHorizontal:10,
        width:'90%',
        height:'90%',
        backgroundColor:'white',
        borderBottomRightRadius:19,
        borderBottomLeftRadius:19

    },
  image: {
    width: '100%',
    height:200,
    borderRadius: 10
    
  },
  
    text: {
        fontSize: 18,
        marginTop: 28,
        fontWeight:'bold',
        alignSelf:"center",
      },
    
    
  button: {
    height: 45,
    width: 175,
    justifyContent: "center",
    borderRadius: 22,
    alignSelf:"center"
    }
})

export default styles;