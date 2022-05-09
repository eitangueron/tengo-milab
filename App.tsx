import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { dummyData } from "./constants/DummyData";
import { useContext, useState } from 'react';
import { IOptionalQuestion } from './types';
import React from 'react';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [ allQuestions, setAllQuestions ] = useState(dummyData)

  const addQuestionToAllQuestions = (newQuestion: IOptionalQuestion) => {
    setAllQuestions( [...allQuestions, newQuestion])
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme}/>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
