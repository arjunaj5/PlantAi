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
  Image: {
    width: '90%',
    height:200
    
  },
  
    Text: {
        fontSize: 18,
        marginTop: 28,
        fontWeight:'bold',
        alignSelf:"center"
      },
    
    
  Button: {
    width: 149,
    height:40,
     borderRadius: 22,
    marginVertical: 9,
    paddingVertical:2,
    alignSelf:"center"
    }
})

export default styles;