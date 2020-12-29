import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import List from '../components/internal/List';
import {kBackground} from '../theme';

import Menu from '../../assets/icons/menu.svg';
import Plus from '../../assets/icons/plus.svg';
import Arrows from '../../assets/icons/arrows.svg';

const {height} = Dimensions.get('screen');

const transactions = [
  {
    id: 0,
    value: 13.5,
    type: 'deposit',
    date: '00/00/00',
  },
  {
    id: 1,
    value: 13.5,
    type: 'deposit',
    date: '00/00/00',
  },
  {
    id: 2,
    value: 13.5,
    type: 'withdraw',
    date: '00/00/00',
  },
  {
    id: 3,
    value: 13.5,
    type: 'deposit',
    date: '00/00/00',
  },
  {
    id: 4,
    value: 13.5,
    type: 'deposit',
    date: '00/00/00',
  },
  {
    id: 5,
    value: 13.5,
    type: 'deposit',
    date: '00/00/00',
  },
  {
    id: 6,
    value: 13.5,
    type: 'withdraw',
    date: '00/00/00',
  },
  {
    id: 7,
    value: 13.5,
    type: 'deposit',
    date: '00/00/00',
  },
];

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Menu color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>MY ACCOUNT</Text>
        <Plus color="white" />
      </View>
      <View style={styles.valueBox}>
        <Text style={styles.valueText}>10.000,00</Text>
        <Text style={styles.valueSubtitle}>Last update at 00:00</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Arrows width="24" height="24" />
          <Text style={styles.contentHeaderText}>TRANSACTIONS</Text>
        </View>
        <List itens={transactions} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: kBackground,
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
    paddingVertical: 50.0,
    flexDirection: 'column',
    alignItems: 'center',
  },
  valueText: {
    fontSize: 45.0,
    color: 'white',
    fontWeight: '500',
    letterSpacing: 1.5,
    marginBottom: 5.0,
  },
  valueSubtitle: {
    color: 'white',
    fontSize: 15.0,
    letterSpacing: 1.5,
  },
  content: {
    backgroundColor: 'white',
    height: height / 1.5,
    marginHorizontal: 20.0,
    borderRadius: 10.0,
    padding: 20.0,
  },
  contentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  contentHeaderText: {
    fontSize: 16.0,
    fontWeight: '300',
    marginLeft: 5.0,
  },
});

export default Home;
