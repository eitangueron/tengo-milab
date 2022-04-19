import { ScrollView, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { dummyData } from '../constants/DummyData';
import OptionsQuestion from '../components/OptionsQuestion';
import { IOptionalQuestion } from '../types';
import React from 'react';


export default function AnswerScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
      {dummyData.map( (questionData:IOptionalQuestion) => <OptionsQuestion key={questionData.id} {...questionData} />)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
