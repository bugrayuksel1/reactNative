import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setUserData} from '../../redux/reducers/userSlice';
import axios from 'axios';

function Login({route, navigation}): React.JSX.Element {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const params = {
      username: userName,
      password,
    };
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(params),
      credentials: 'include', // Include cookies (e.g., accessToken) in the request
    })
      .then(res => res.json())
      .then(response => {
        if (response?.message === 'Invalid credentials') {
          console.log('Hatalı bilgi.');
        } else {
          dispatch(
            setUserData({
              username: response.username,
              firstName: response.firstName,
              lastName: response.lastName,
              gender: response.gender,
            }),
          ),
            navigation.navigate('Home');
        }
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Kullanıcı Adı:</Text>
        <TextInput
          textContentType="username"
          autoCapitalize="none"
          onChangeText={value => setUserName(value)}
          style={styles.textInput}
        />
      </View>
      <View>
        <Text>Şifre:</Text>
        <TextInput
          textContentType="password"
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={value => setPassword(value)}
          style={styles.textInput}
        />
      </View>
      <Button title="Giriş" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
  textInput: {
    width: 200,
    borderColor: '#222',
    borderWidth: 1,
  },
});

export default Login;
