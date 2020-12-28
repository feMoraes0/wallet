import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Divider = ({text}) => {
  return (
    <View style={styles.divider}>
      <View style={styles.dividerBox} />
      <Text style={styles.dividerText}> {text} </Text>
      <View style={styles.dividerBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    marginVertical: 10.0,
    paddingHorizontal: 20.0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  dividerBox: {
    height: 2.0,
    width: '40%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  dividerText: {
    fontSize: 18.0,
    color: 'white',
    letterSpacing: 1.5,
    fontWeight: '600',
  },
});

export default Divider;
