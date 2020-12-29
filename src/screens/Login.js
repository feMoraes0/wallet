import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import Button from '../components/external/Button';
import Divider from '../components/external/Divider';
import Header from '../components/external/Header';
import Input from '../components/external/Input';
import InputLabel from '../components/external/InputLabel';
import {kBackground} from '../theme';

const Login = ({navigation}) => {
  const goToRegister = () => {
    navigation.navigate('Register');
  };

  const goToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header text="LOGIN" />
      <View style={styles.form}>
        <InputLabel>USERNAME</InputLabel>
        <Input type="username" focus={true} />
        <InputLabel>PASSWORD</InputLabel>
        <Input type="password" focus={false} />
        <Button
          text="LOGIN"
          textColour={kBackground}
          backgroundColour="white"
          onPress={() => goToHome()}
        />
      </View>
      <Divider text="OR" />
      <View style={styles.footer}>
        <Button
          text="REGISTER"
          textColour="white"
          backgroundColour="rgba(255, 255, 255, 0.1)"
          onPress={() => goToRegister()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: kBackground,
  },
  form: {
    marginTop: 40.0,
    padding: 20.0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 20.0,
  },
});

export default Login;
