import React from "react";
import { Button, Portal, Provider, Modal } from 'react-native-paper';
import { Text, View, StyleSheet } from "react-native";


const DefaultModal = ({modalVisible, hideModal, children}) => {

  return(
    <Provider>
        <Portal>
            <Modal visible={modalVisible} onDismiss={hideModal} contentContainerStyle={styles.container}>
              {children}
            </Modal>
        </Portal>
    </Provider>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 30,
    width: '90%',
    minHeight: '80%',
    alignSelf: "center",
    borderRadius: 20,
    justifyContent: "flex-start",
  },
})

export default DefaultModal