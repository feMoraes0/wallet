import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = ({type, focus}) => {
  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      autoFocus={focus}
      clearButtonMode="while-editing"
      textContentType={type}
      secureTextEntry={type === 'password' ? true : false}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 20.0,
    marginVertical: 15.0,
    fontSize: 16.0,
    color: 'white',
    borderRadius: 10.0,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    fontWeight: '600',
  },
});

export default Input;
