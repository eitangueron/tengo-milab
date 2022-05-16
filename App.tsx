import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { dummyData } from "./constants/DummyData";
import { useContext, useEffect, useState } from 'react';
import { IOptionalQuestion } from './types';
import React from 'react';
import axios from 'axios';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [ allQuestions, setAllQuestions ] = useState(dummyData)

  // const getData = async () => {
  //   const res = await axios.get('./constants/DummyData.json')
  //   console.log(res.data)
  //   setAllQuestions(res.data)
  // }

  // useEffect(()=>{
  //   getData()
  // },[])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} allQuestions={allQuestions} setAllQuestions={setAllQuestions}/>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
