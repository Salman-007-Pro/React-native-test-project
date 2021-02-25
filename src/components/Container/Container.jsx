import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const Container = ({ children }) => {
  return <SafeAreaView style={styles.droidSafeArea}>{children}</SafeAreaView>;
};

export default Container;

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
