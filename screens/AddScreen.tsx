import { Alert, StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { IOptionalQuestion, RootTabScreenProps } from "../types";

import { Formik } from "formik";

import { v4 as uuidv4 } from "uuid";

import { Button, Icon, Input } from "@rneui/themed";
import { dummyData } from "../constants/DummyData";
import React, { useState } from "react";
import ThankYouOverlay from "../components/ThankYouOverlay";
import { useNavigation } from "@react-navigation/native";

export default function AddScreen(props: any) {
  // console.log(props.props.allQuestions.allQuestions)
  const { allQuestions, setAllQuestions } = props.props.allQuestions;

  // console.log(allQuestions)

  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const addQuestionToAllQuestions = (newQuestion: IOptionalQuestion) => {
    setAllQuestions([...allQuestions, newQuestion]);
  };

  const validateUserInput = (userInput: IOptionalQuestion) => {
    const { question, options } = userInput;
    if (!question) {
      alert("Please fill question");
      return false;
    } else if (!options[0].text) {
      let i = 1;
      alert("Please fill option " + i);
      return false;
    } else if (!options[1].text) {
      let i = 2;
      alert("Please fill option " + i);
      return false;
    } else if (!options[2].text) {
      let i = 3;
      alert("Please fill option " + i);
      return false;
    } else{ 
      return true
    }
    // options.forEach( (option, index) => {
    //   if(!option.text){
    //     let i = index+1
    //     alert('Please fill option '+ i)
    //     return false
    //   }
    // })
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          question: "",
          optionOne: "",
          optionTwo: "",
          optionThree: "",
        }}
        onSubmit={(values, actions) => {
          const result: IOptionalQuestion = {
            id: uuidv4(),
            question: values.question,
            options: [
              {
                text: values.optionOne,
                count: 0,
              },
              {
                text: values.optionTwo,
                count: 0,
              },
              {
                text: values.optionThree,
                count: 0,
              },
            ],
          };
          if (validateUserInput(result)) {
            console.log(result);
            addQuestionToAllQuestions(result);
            toggleOverlay();
            actions.resetForm();
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <ThankYouOverlay
              navigation={navigation}
              visible={visible}
              toggleOverlay={() => toggleOverlay()}
            ></ThankYouOverlay>
            <Input
              onChangeText={handleChange("question")}
              onBlur={handleBlur("question")}
              value={values.question}
              placeholder="Enter Your Question"
              // rightIcon={
              //   <Icon
              //     name='user'
              //     size={24}
              //     color='black'
              //   />
              // }
            />
            <Input
              onChangeText={handleChange("optionOne")}
              onBlur={handleBlur("optionOne")}
              value={values.optionOne}
              placeholder="Optional Answer 1"
            />
            <Input
              onChangeText={handleChange("optionTwo")}
              onBlur={handleBlur("optionTwo")}
              value={values.optionTwo}
              placeholder="Optional Answer 2"
            />
            <Input
              onChangeText={handleChange("optionThree")}
              onBlur={handleBlur("optionThree")}
              value={values.optionThree}
              placeholder="Optional Answer 3"
            />
            <Button onPress={handleSubmit} title="Submit" />
            {/* <Button onPress={(handleSubmit)} title="addOption" /> */}
          </>
        )}
      </Formik>
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
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
