import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Card>
          <AssetExample
            name="КОМПЬЮТЕР I-ON GAMER R5 RTX 3060 В МОГИЛЁВЕ"
            image={require('./assets/pc1.jpg')}
            description="Тип стандартный, Количество ядер 6, Процессор AMD Ryzen 5, Тактовая частота 3 600 МГц, Тип оперативной памяти DDR4, Объём памяти 16 ГБ, Тип накопителя SSD, Ёмкость накопителя 1000 ГБ, Тип графического адаптера дискретный, Блок питания 600 Вт ActivePFC, Подсветка корпуса"
          />
        </Card>
        <View style={styles.line}></View>
        <Card>
          <AssetExample
            name="КОМПЬЮТЕР I-ON GAMER R5600G В МОГИЛЁВЕ"
            image={require('./assets/pc2.jpg')}
            description="Тип стандартный, Количество ядер 6, Процессор AMD Ryzen 5, Тактовая частота 3 900 МГц, Тип оперативной памяти DDR4, Объём памяти 16 ГБ, Тип накопителя SSD, Ёмкость накопителя 512 ГБ, Блок питания 600 Вт ActivePFC, Подсветка корпуса"
          />
        </Card>
        <View style={styles.line}></View>
        <Card>
          <AssetExample
            name="КОМПЬЮТЕР I-ON LITE GAMER GTX1650 В МОГИЛЁВЕ"
            image={require('./assets/pc3.jpg')}
            description="Тип стандартный, Количество ядер 4, Процессор Intel Core i3, Тактовая частота 4 400 МГц, Тип оперативной памяти DDR4, Объём памяти 8 ГБ, Тип накопителя SSD, Ёмкость накопителя 256 ГБ, Тип графического адаптера дискретный, Блок питания 500 Вт ActivePFC, Подсветка корпуса"
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
  line: {
    height: 10,
  },
});
