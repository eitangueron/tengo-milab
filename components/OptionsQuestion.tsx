import { StyleSheet } from "react-native";

import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { View } from "./Themed";
import { Text, Card, Button, Icon } from "@rneui/themed";
import {IOptionalQuestion} from '../types'

export default function OptionsQuestion({question, options, id}: IOptionalQuestion) {

  return (
    <View>
      <Card containerStyle={{ marginTop: 15 }}>
        <Card.Title>{question}</Card.Title>
        <Card.Divider />
        {/* single click - should send action to DB and display*/}
        {options.map( (option,i) => <Text key={id+i} style={styles.option} onPress={() => console.log(++option.count)}>{option.text}</Text>)}
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
