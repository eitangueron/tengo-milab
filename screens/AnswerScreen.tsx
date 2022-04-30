import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { dummyData } from '../constants/DummyData';
import OptionsQuestion from '../components/OptionsQuestion';
import { IOptionalQuestion } from '../types';
import React from 'react';
import { Button } from '@rneui/base';


export default function AnswerScreen( {navigation} ) {
  return (
    <View style={styles.container}>
      <ScrollView>
      {dummyData.map( (questionData:IOptionalQuestion) => <OptionsQuestion key={questionData.id} {...questionData} />)}
      </ScrollView>
      <TouchableOpacity onPress={ ()=>navigation.navigate('AddScreen')} style={styles.roundButton}><Text style={styles.title}>+</Text></TouchableOpacity>
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
    color:'white',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  roundButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'flex-end',
    marginEnd:'10%',
    marginBottom:'10%',
    textAlign:'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#1a6eb0',
  },
});
