import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {kBackground} from '../theme';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>LOGIN</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formLabel}>USERNAME</Text>
        <TextInput style={styles.formInput} />
        <Text style={styles.formLabel}>PASSWORD</Text>
        <TextInput style={styles.formInput} />
        <TouchableOpacity style={styles.formButton}>
          <Text style={styles.formButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider}>
        <View style={styles.dividerBox} />
        <Text style={styles.dividerText}> OR </Text>
        <View style={styles.dividerBox} />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={[styles.formButton, styles.footerButton]}>
          <Text style={[styles.formButtonText, styles.footerButtonText]}>
            REGISTER
          </Text>
        </TouchableOpacity>
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
  form: {
    marginTop: 40.0,
    padding: 20.0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  formLabel: {
    fontSize: 16.0,
    fontWeight: '500',
    letterSpacing: 1.5,
    color: 'white',
  },
  formInput: {
    padding: 20.0,
    marginVertical: 15.0,
    fontSize: 16.0,
    color: 'white',
    borderRadius: 10.0,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  formButton: {
    marginTop: 15.0,
    backgroundColor: 'white',
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
  formButtonText: {
    fontSize: 18.0,
    color: kBackground,
    letterSpacing: 1.5,
    fontWeight: '600',
  },
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
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 20.0,
  },
  footerButton: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  footerButtonText: {
    color: 'white',
  },
});

export default Login;
