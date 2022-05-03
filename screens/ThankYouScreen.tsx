import { Button } from '@rneui/base';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function ThankYouScreen(navigation) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thanks for asking a question</Text>
      <Text style={styles.title}>We’ll let you know when other moms start answering</Text>
      <Button onPress={ () => navigation.navigate('AnswerScreen')}>Got it</Button>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
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
