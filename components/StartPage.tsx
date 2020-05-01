import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native';
import {TextAnimationFadeIn} from 'react-native-text-effects';


const StartPage = ({loadProgress}: {loadProgress: number}) => {
  const textList = ["Here She Comes", "My name is kilo-COVID", "I smash for a living",  "I am loading, please", "Stay Home, Stay Safe", "I am taking a pee, hold On"];
  const rand = Math.floor(Math.random() * textList.length);
  return (
    <View style={styles.view}>
      <Image source={require('../assets/newlogo.png')} style={styles.image} />
        <TextAnimationFadeIn value={textList[rand]} delay={100} duration={1500} style={styles.loadingText} />
    </View>
  );
};

const {height} = Dimensions.get("window");

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    marginTop: '5%',
    fontSize: 20,
    textAlign: 'left',
    paddingTop: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '5%',
    color: '#ffc',
  },
  image: {
    width: height/2.5,
    height: height/2.5,
    marginTop: '40%'
  },
  loadingText: {
    fontSize: 18,
    color: '#fff'
  }
});

export default StartPage;
