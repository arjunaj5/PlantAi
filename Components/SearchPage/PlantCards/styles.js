import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    card: {
        width: '90%',
        height: '20%',
        backgroundColor: '#fff',
        marginTop: 20, 
        borderRadius: 16,
        flexDirection: "row",
        justifyContent: "flex-start",
        padding: 15
    },
    cardtext: {
        padding: 16,
        width: '70%'
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 10
    },
    para: {
        flexWrap: "wrap"
    }
})


export default styles;