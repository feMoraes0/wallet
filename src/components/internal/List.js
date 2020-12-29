import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';

import ArrowBottom from '../../../assets/icons/arrow_bottom.svg';
import ArrowTop from '../../../assets/icons/arrow_top.svg';
import {kBackground, kRedColour} from '../../theme';

const List = ({itens}) => {
  const ListItem = ({item}) => {
    return (
      <View key={item.index} style={styles.listItem}>
        {item.type === 'deposit' ? (
          <View style={[styles.listItemIcon, styles.listItemDeposit]}>
            <ArrowBottom color="white" width="30" height="30" />
          </View>
        ) : (
          <View style={[styles.listItemIcon, styles.listItemWithdraw]}>
            <ArrowTop color="white" width="30" height="30" />
          </View>
        )}
        <View style={styles.values}>
          <Text style={styles.listItemValue}>{item.value}</Text>
          <Text style={styles.listItemDate}>{item.date}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      style={styles.list}
      data={itens}
      keyExtractor={(item) => item.id}
      bounces={false}
      renderItem={ListItem}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20.0,
  },
  listItem: {
    width: '100%',
    height: 65.0,
    paddingVertical: 10.0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listItemIcon: {
    height: 45.0,
    width: 45.0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5.0,
    marginRight: 20.0,
  },
  values: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  listItemValue: {
    fontSize: 20.0,
    letterSpacing: 1.5,
  },
  listItemDate: {
    fontSize: 17.0,
    letterSpacing: 1.5,
    color: '#666',
  },
  listItemDeposit: {
    backgroundColor: kBackground,
  },
  listItemWithdraw: {
    backgroundColor: kRedColour,
  },
});

export default List;
