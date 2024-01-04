import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../calculator.png')} style={styles.innerimg} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerimg: {
    width: 200,
    height: 200,
  },
});
export default IntroScreen;
