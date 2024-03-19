import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <Card>
    <Text style={styles.paragraph}>
        5 книжных новинок октября
      </Text>
      </Card>
      
      <Card style={styles.second2}>
        <Text style={styles.second}>
          "Кадиш.com" Натан ингландер.
          Издательство книжки.
        </Text>
      </Card>
      <Card style={styles.first2}>
        <Text style={styles.first}>
        Способность тонко чувствительность иногда считается недостатком, но психологи смело заявляют, что на самом деле очень крутой талант. 
        </Text>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
    
    backgroundColor: 'gray'
  },
  paragraph: {
    backgroundColor: 'white',
    margin: 24,
    width: 350,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  second:{
    width: 350,
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
  second2:{
    backgroundColor: '#B2BEB5'
  },
  first:{
        margin: 24,
    fontSize: 15,
    textAlign: 'center',
  },
  first2:{
    backgroundColor: 'gray'
  }
});
