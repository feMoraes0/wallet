import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import Button from '../components/external/Button';
import Divider from '../components/external/Divider';
import Header from '../components/external/Header';
import Input from '../components/external/Input';
import InputLabel from '../components/external/InputLabel';
import {kBackground} from '../theme';

const Register = ({navigation}) => {
  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header text="REGISTER" />
      <View style={styles.form}>
        <InputLabel>USERNAME</InputLabel>
        <Input type="username" focus={true} />
        <InputLabel>PASSWORD</InputLabel>
        <Input type="password" focus={false} />
        <InputLabel>CONFIRM PASSWORD</InputLabel>
        <Input type="password" focus={false} />
        <Button
          text="REGISTER"
          textColour={kBackground}
          backgroundColour="white"
          onPress={() => null}
        />
      </View>
      <Divider text="OR" />
      <View style={styles.footer}>
        <Button
          text="LOGIN"
          textColour="white"
          backgroundColour="rgba(255, 255, 255, 0.1)"
          onPress={() => goToLogin()}
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

export default Register;
