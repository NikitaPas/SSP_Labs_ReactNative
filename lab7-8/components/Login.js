import React, { useState } from "react";
import { View, TextInput, Button, Image, Alert } from "react-native";
import Toast from "react-native-toast-message";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert("Ошибка", "Пожалуйста, заполните все поля", [
        { text: "OK", onPress: () => {} },
      ]);
      return;
    }
    Alert.alert("Успешно", "Вход выполнен успешно", [
      { text: "OK", onPress: () => {} },
    ]);
    navigation.navigate("Welcome", { username });
    setUsername("");
    setPassword("");
  };

  const navigateToRegister = () => {
    navigation.navigate("Register");
    setUsername("");
    setPassword("");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Toast forwardRef={(r) => Toast.setRef(r)} />
      <Image
        source={require("../img/h.png")}
        style={{ width: 150, height: 150, marginBottom: 20, zIndex: -1 }}
      />
      <TextInput
        placeholder="Логин"
        value={username}
        onChangeText={setUsername}
        style={{ marginBottom: 10, borderWidth: 1, padding: 10, width: 200 }}
      />
      <TextInput
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={{ marginBottom: 10, borderWidth: 1, padding: 10, width: 200 }}
      />
      <View style={{ marginBottom: 10 }}>
        <Button title="Войти" onPress={handleLogin} color={"blue"} />
      </View>
      <Button
        title="Регистрация"
        onPress={navigateToRegister}
        color={"black"}
      />
    </View>
  );
};

export default Login;