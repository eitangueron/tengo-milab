import { StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { IOptionalQuestion, RootTabScreenProps } from "../types";

import { Formik } from "formik";

import { v4 as uuidv4 } from 'uuid';

import { Button, Input } from '@rneui/themed';
import { dummyData } from "../constants/DummyData";

export default function AddScreen({
  navigation,
}: RootTabScreenProps<"AddScreen">) {
  return (
    <View style={styles.container}>

      <Formik
        initialValues={{
          question: "",
          optionOne: "",
          optionTwo: "",
          optionThree: "",
        }}
        onSubmit={(values, actions) => 
          {
            const result:IOptionalQuestion = {
              id:uuidv4(),
              question:values.question,
              options:[
                {
                  text:values.optionOne,
                  count:0
                },
                {
                  text:values.optionTwo,
                  count:0
                },
                {
                  text:values.optionThree,
                  count:0
                },
              ]
            }
            console.log(result) // change to save to DB
            actions.resetForm()
          }
        }
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
            <>
            <Input
              onChangeText={handleChange("question")}
              onBlur={handleBlur("question")}
              value={values.question}
              placeholder='Enter Your Question' />
            <Input
              onChangeText={handleChange("optionOne")}
              onBlur={handleBlur("optionOne")}
              value={values.optionOne}
              placeholder='Optional Answer 1' />
            <Input
              onChangeText={handleChange("optionTwo")}
              onBlur={handleBlur("optionTwo")}
              value={values.optionTwo}
              placeholder='Optional Answer 2' />
            <Input
              onChangeText={handleChange("optionThree")}
              onBlur={handleBlur("optionThree")}
              value={values.optionThree}
              placeholder='Optional Answer 3' />
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
