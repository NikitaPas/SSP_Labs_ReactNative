import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
   <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Кнопка нажата")}
      >
        <Text style={styles.buttonText}>Новости</Text>
      </TouchableOpacity>
      <Text style={styles.paragraph}>
        Зона гениальности: как туда попасть и там остаться
      </Text>
      <Text style={styles.text}>
      Гениальность — это не удел избранных, а часть каждого из нас. Раскрываем и наслаждаемся!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  paragraph: {
    marginBottom: 25,
    marginTop: 25,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  text: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 35,
  },
  button: {
    paddingTop: 40,
    marginBottom: 40,
    alignSelf: 'flex-start',
    paddingBottom: 15,
    
  },
  buttonText: {
    fontSize: 15,
    color: 'blue',
  },
});
