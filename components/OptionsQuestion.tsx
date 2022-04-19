import { StyleSheet } from "react-native";

import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { View } from "./Themed";
import { Text, Card, Button, Icon } from "@rneui/themed";
import {IOptionalQuestion, IQuestion} from '../types'
import { useState } from "react";

export default function OptionsQuestion({question, options, id}: IOptionalQuestion) {

  const [answered, setAnswered] = useState(false);

  const answerQuestion = (option:IQuestion) => {
    if(answered){ return }
    console.log(++option.count)
    setAnswered(true);
  }

  return (
    <View>
      <Card containerStyle={{ marginTop: 15 }}>
        <Card.Title>{question}</Card.Title>
        <Card.Divider />
        {/* single click - should send action to DB and display*/}
        {options.map( (option,i) => <Text key={id+i} style={styles.option} onPress={() => answerQuestion(option)}>{option.text}{answered ? option.count : null}</Text>)}
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  option:{
    // textAlign: "center",
    margin:10
  }
});
