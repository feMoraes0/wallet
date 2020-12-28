import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({text, textColour, backgroundColour, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {backgroundColor: backgroundColour}]}>
      <Text style={[styles.buttonText, {color: textColour}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: ' 100%',
    marginTop: 15.0,
    padding: 20.0,
    borderRadius: 10.0,
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  buttonText: {
    fontSize: 18.0,
    letterSpacing: 1.5,
    fontWeight: '600',
  },
});

export default Button;
