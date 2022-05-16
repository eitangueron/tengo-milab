import { StyleSheet, Touchable, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { View } from "./Themed";
import { Text, Card, Button, Icon } from "@rneui/themed";
import { IOptionalQuestion, IQuestion } from "../types";
import React, { useState } from "react";
import { Chip } from "@rneui/base";

export default function OptionsQuestion({
  question,
  options,
  id,
}: IOptionalQuestion) {
  const [answered, setAnswered] = useState(false);

  const totalCount = options.reduce((acc, option) => acc + option.count, 0);

  function calcOptionPrcentage(count: number) {
    return ((count / totalCount) * 100).toFixed(2);
  }

  const answerQuestion = (option: IQuestion) => {
    if (answered) {
      return;
    }
    console.log(++option.count);
    setAnswered(true);
  };

  return (
    <View>
      <Card containerStyle={styles.container}>
        <Card.Title>{question}</Card.Title>
        <Card.Divider />
        {/* single click - should send action to DB and display*/}
        {options.map((option, i) => (
          <TouchableOpacity style={styles.option} key={id + i} onPress={() => answerQuestion(option)}>
            {/* <View style={{display:'flex', flex:1}}> */}
            {/* <View style={{backgroundColor: answered? 'green' : 'white'}}> */}

              <Text style={{margin: 10, alignSelf:'center', textAlign:'center'}}>{option.text}</Text>

            {answered ? (
              <Text style={{margin: 10, alignSelf:'flex-end', textAlign:'center'}}>{calcOptionPrcentage(option.count)}%</Text>
              ) : null}
              {/* </View> */}
            {/* </View> */}
            
            {/* 
            {answered ? (
                <><Text style={{ margin: 10, textAlign: 'right' }}>
                {" "}
                Answers: {option.count}
              </Text><Text
                style={{
                  ...styles.precent,
                  width: calcOptionPrcentage(option.count) + "%",
                }}
              >
                  {calcOptionPrcentage(option.count)}%
                </Text></>
            ) : null} */}
          </TouchableOpacity>
        ))}
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    // borderWidth: 3,
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  option: {
    // borderRadius: 2,
    // fontWeight:'bold',
    borderColor: "black",
    borderWidth: 0.5,
    textAlign: "center",
    margin: 10,
    borderRadius: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    display:'flex',
    flex: 1,
    // width:'100%'
  },
  precent: {
    // textAlign: "center",
    // fontSize:12,
    backgroundColor: "green",
    width: "30%",
    opacity: 0.7,
  },
});


