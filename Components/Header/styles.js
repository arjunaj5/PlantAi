import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
container: {
position: 'absolute',
top: 50,
zIndex:2,
flexDirection: 'row',
justifyContent: 'space-between',
width: '100%',
paddingHorizontal: 20
},
logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
},
menu: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
},
});

export default styles;