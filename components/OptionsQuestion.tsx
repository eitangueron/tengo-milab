import { StyleSheet } from "react-native";

import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { View } from "./Themed";
import { Text, Card, Button, Icon } from "@rneui/themed";
import { IOptionalQuestion, IQuestion } from "../types";
import { useState } from "react";

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
      <Card containerStyle={{ marginTop: 15 }}>
        <Card.Title>{question}</Card.Title>
        <Card.Divider />
        {/* single click - should send action to DB and display*/}
        {options.map((option, i) => (
          <>
            <Text
              key={id + i}
              style={styles.option}
              onPress={() => answerQuestion(option)}
            >
              {option.text}
            </Text>
              {answered ? <Text style={styles.option}> Answers: {option.count}</Text> : null}
            {answered ? <Text style={{...styles.precent, width:calcOptionPrcentage(option.count) + '%' }}>{calcOptionPrcentage(option.count)}%</Text> : null}
          </>
        ))}
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
  option: {
    // textAlign: "center",
    margin: 10,
  },
  precent: {
    // textAlign: "center",
    // fontSize:12,
    backgroundColor: 'green',
    width: '30%',
    opacity:0.7,
  },

});
