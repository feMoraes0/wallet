import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({text}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10.0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 22.0,
    fontWeight: '600',
    letterSpacing: 1.5,
    color: 'white',
  },
});

export default Header;
