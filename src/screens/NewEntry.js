import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Menu from '../../assets/icons/menu.svg';
import {kBackground, kRedColour} from '../theme';
import Arrows from '../../assets/icons/arrows.svg';
import Check from '../../assets/icons/check.svg';
import {useState} from 'react';

const NewEntry = () => {
  const [transactionType, setTtransactionType] = useState('deposit');
  const [background, setBackground] = useState(kBackground);
  const [transactionValue, setTtransactionValue] = useState(0.0);

  const updateType = () => {
    setTtransactionType(
      transactionType === 'withdraw' ? 'deposit' : 'withdraw',
    );
    setBackground(transactionType === 'deposit' ? kRedColour : kBackground);
  };

  const save = () => {
    console.warn({
      type: transactionType,
      value: transactionValue,
    });
  };

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: background}]}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Menu color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>NEW ENTRY</Text>
        <TouchableOpacity onPress={() => save()}>
          <Check color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.valueBox}>
        <TextInput
          style={styles.valueText}
          keyboardType="decimal-pad"
          placeholder="0.00"
          placeholderTextColor="white"
          autoFocus={true}
          onChangeText={(value) => setTtransactionValue(value)}
        />
        <TouchableOpacity onPress={() => updateType()}>
          <View style={styles.button}>
            <Arrows color="white" width="24" height="24" />
            <Text style={styles.valueSubtitle}>
              {transactionType.toUpperCase()}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15.0,
  },
  headerText: {
    fontSize: 19.0,
    letterSpacing: 1.5,
    fontWeight: '300',
    color: 'white',
  },
  valueBox: {
    paddingVertical: 60.0,
    flexDirection: 'column',
    alignItems: 'center',
  },
  valueText: {
    textAlign: 'center',
    width: '100%',
    fontSize: 50.0,
    color: 'white',
    fontWeight: '500',
    letterSpacing: 1.5,
    marginBottom: 5.0,
  },
  valueSubtitle: {
    color: 'white',
    fontSize: 20.0,
    letterSpacing: 1.5,
    marginLeft: 5.0,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10.0,
  },
});

export default NewEntry;
