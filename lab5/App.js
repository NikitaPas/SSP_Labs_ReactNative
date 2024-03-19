import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const contactsData = [
  { id: '1', name: 'John Doe', email: 'john.doe@example.com', age: 30 },
  { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com', age: 28 },
  { id: '3', name: 'Michael Johnson', email: 'michael.johnson@example.com', age: 35 },
  { id: '4', name: 'Emily Davis', email: 'emily.davis@example.com', age: 32 },
  { id: '5', name: 'David Wilson', email: 'david.wilson@example.com', age: 27 },
  { id: '6', name: 'Sarah Anderson', email: 'sarah.anderson@example.com', age: 29 },
];

const contactsData2 = [
  { id: '1', name: 'Robert Thompson', email: 'robert.thompson@example.com', age: 33 },
  { id: '2', name: 'Olivia Martinez', email: 'olivia.martinez@example.com', age: 31 },
  { id: '3', name: 'James Taylor', email: 'james.taylor@example.com', age: 26 },
  { id: '4', name: 'Sophia Lewis', email: 'sophia.lewis@example.com', age: 29 },
  { id: '5', name: 'Daniel Clark', email: 'daniel.clark@example.com', age: 34 },
  { id: '6', name: 'Isabella Rodriguez', email: 'isabella.rodriguez@example.com', age: 27 },
];

const contactsData3 = [
  { id: '1', name: 'Matthew Lee', email: 'matthew.lee@example.com', age: 31 },
  { id: '2', name: 'Ava Walker', email: 'ava.walker@example.com', age: 28 },
  { id: '3', name: 'William Wright', email: 'william.wright@example.com', age: 33 },
  { id: '4', name: 'Samantha Hall', email: 'samantha.hall@example.com', age: 30 },
  { id: '5', name: 'Joseph Young', email: 'joseph.young@example.com', age: 26 },
  { id: '6', name: 'Natalie Scott', email: 'natalie.scott@example.com', age: 32 },
];


const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Первая страница работников</Text>
      <FlatList
        data={contactsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.contactText}>{`${item.name} ${item.email} - ${item.age}`}</Text>
        )}
      />
      <Button
        title="Далее"
        onPress={() => navigation.navigate('Second')}
      />
    </View>
  );
};

const SecondScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>вторая страница работников</Text>
      <FlatList
        data={contactsData2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.contactText}>{`${item.name} ${item.email} - ${item.age}`}</Text>
        )}
      />
      <Button
        title="Далее"
        onPress={() => navigation.navigate('Third')}
      />
      <Button title="Назад" onPress={() => navigation.goBack()} />
    </View>
  );
};

const ThirdScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>третья страница работников</Text>
      <FlatList
        data={contactsData3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.contactText}>{`${item.name} ${item.email} - ${item.age}`}</Text>
        )}
      />
      <Button title="Назад" onPress={() => navigation.goBack()} />
    </View>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
        <Stack.Screen name="Third" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  contactText: {
    fontSize: 24,
    marginBottom: 8,
  },
});