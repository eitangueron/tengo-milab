import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";
import { dummyData } from "../constants/DummyData";
import OptionsQuestion from "../components/OptionsQuestion";
import { IOptionalQuestion } from "../types";
import React from "react";
import { FAB } from "@rneui/base";

export default function AnswerScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {dummyData.map((questionData: IOptionalQuestion) => (
          <OptionsQuestion key={questionData.id} {...questionData} />
        ))}
      </ScrollView>
      <FAB
        // visible={visible}
        title="Add a Question"
        // upperCase
        size="small"
        onPress={() => navigation.navigate("AddScreen")}
        color="#1a6eb0"
        icon={{ name: "add", color: "white" }}
        style={{
          alignSelf: "flex-end",
          marginEnd: "5%",
          marginBottom: "10%",
          // width:'30%',
          // fontSize: 12,
        }}
      />
      {/* <TouchableOpacity onPress={ ()=>navigation.navigate('AddScreen')} style={styles.addButton}><Text style={styles.title}>+ Add a Question</Text></TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  roundButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginEnd: "10%",
    marginBottom: "10%",
    textAlign: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#1a6eb0",
  },
  addButton: {
    // width: 'fit-content',
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginEnd: "7%",
    marginBottom: "10%",
    textAlign: "center",
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#1a6eb0",
  },
});
