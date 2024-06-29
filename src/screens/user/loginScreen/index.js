/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {UserContext} from '../../../context/users/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [email, setEmail] = useState('trung@gmail.com');
  const [password, setPassword] = useState('1');
  const [loading, setLoading] = useState(false);
  const {onLogin} = useContext(UserContext);

  const onLoginPress = async () => {
    setLoading(true);
    const result = await onLogin(email, password);
    console.log('result', result);
    if (result.data) {
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('userPassword', password);
      UserContext.setUser(result.data);
    }
    setLoading(false);
  };

  return (
    <View style={styles.T}>
      <TextInput
        style={styles.inputCss}
        value={email}
        onChangeText={setEmail}
        placeholder="Nhập email của bạn"
      />
      <TextInput
        style={styles.inputCss}
        value={password}
        onChangeText={setPassword}
        placeholder="Nhập mật khẩu của bạn"
      />
      <TouchableOpacity style={styles.buttonCss} onPress={onLoginPress}>
        <Text style={styles.textLogin}>
          {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  T: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputCss: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
  },
  buttonCss: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 40,
    marginTop: 20,
    backgroundColor: 'gray',
  },
  textLogin: {
    color: 'white',
  },
});
