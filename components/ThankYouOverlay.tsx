import React, { useState } from "react";
import { Button, Overlay } from '@rneui/themed';
import { Text, StyleSheet } from 'react-native';

export default function ThankYouOverlay({ navigation, visible, toggleOverlay } : {navigation:any, visible:boolean, toggleOverlay:()=>void}) {

  return (
    <Overlay isVisible={visible} style={styles.container}>
      <Text style={styles.textPrimary}>Thanks for asking a question</Text>
      <Text style={styles.textSecondary}>
        We’ll let you know when other moms start answering
      </Text>
      <Button
        title="Got it"
        style={styles.button}
        onPress={() => {
          toggleOverlay()
          navigation.navigate("AnswerScreen");
        }}
      />
    </Overlay>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    width:'50%',
    alignSelf:'center',
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 20,
    color:'black',
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 17,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'white',
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    height: 30,
  },
  gotItBtnStyle: {
    marginVertical: 30,
    height: 30,
    width: "80%",
  },
});
