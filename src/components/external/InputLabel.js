import React from 'react';
import {Text, StyleSheet} from 'react-native';

const InputLabel = ({children}) => {
  return <Text style={styles.inputLabel}>{children}</Text>;
};

const styles = StyleSheet.create({
  inputLabel: {
    fontSize: 16.0,
    fontWeight: '500',
    letterSpacing: 1.5,
    color: 'white',
  },
});

export default InputLabel;
