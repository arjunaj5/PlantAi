import { StyleSheet } from "react-native";

import globalStyles from '../../../../globalStyles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECDCDC',
    minHeight: 100,
    marginBottom: 35,
    borderRadius: 10,
    padding: 10,
    ...globalStyles.boxShadow
  },
  row: {
    flexDirection: "row"
  },
  comments: {
    maxWidth: 200,
    marginLeft: 10,
    borderRadius: 5,
  },
  heading: {
    marginBottom: 5,
    fontWeight: "bold"
  }
});

export default styles;