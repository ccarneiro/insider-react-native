import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard';

const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function App() {

  const [size, setSize] = useState(10);
  const [password, setPassword] = useState('');

  function generatePass() {
    // alert('Clicou no botão');
    const passGen = Array.from(Array(size).keys()).map(() => charset[Math.floor(Math.random() * charset.length)]).join('');
    setPassword(passGen);
  }

  function copyPass() {
    Clipboard.setString(password);
    alert('Senha copiada com sucesso!');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo}
        source={require('./src/assets/logo.png')}
      />
      <Text style={styles.title}>{size} caracteres</Text>
      <View style={styles.area}>
        <Slider
          style={{height: 50}}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#FF0000"
          maximumTrackTintColor="#000"
          step={1}
          value={size}
          onValueChange={(value) => (console.log(value), setSize(value))}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={generatePass}
      >
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>
      {password !== '' && (
        <View style={styles.area}>
          <Text style={styles.password} onLongPress={copyPass}>{password}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F3FF',
  },
  logo: {
    marginBottom: 60
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#FFF',
    width: '80%',
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#FFA200',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 25,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold'
  },
  password: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
  },
});
