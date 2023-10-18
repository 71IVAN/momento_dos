import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import UserScreen from './UserScreen';
import CarScreen from './CarScreen';
import RentScreen from './RentScreen';

export default function LoginScreen() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([
    { username: "user1", password: "password1", email: "user1@example.com" },
    { username: "user2", password: "password2", email: "user2@example.com" },
    // Agrega más usuarios si es necesario
  ]);

  const handleLogin = () => {
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      setLoggedIn(true);
    } else {
      alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {loggedIn ? (
        <>
          <Text>Bienvenido, {username}</Text>
          <UserScreen />
          <CarScreen />
          <RentScreen users={users} cars={[]} />
        </>
      ) : (
        <View>
          <TextInput
            placeholder="Usuario"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button title="Iniciar Sesión" onPress={handleLogin} />
        </View>
      )}
    </View>
  );
}
