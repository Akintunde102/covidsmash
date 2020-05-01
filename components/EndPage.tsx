import React, {useState} from 'react';
import {View, StyleSheet, Text, ImageBackground, Dimensions} from 'react-native';
import ShareModal from './ShareModal';
import SimpleButton from './SimpleButton';

import { getLevel } from '../utils';

const EndPage = ({scores}: {scores: number;}) => {
  const {width, height} = Dimensions.get("window");
  const styles = StyleSheet.create({
    view: {
      fontSize: 20,
      textAlign: 'left',
      padding: '1%',
      marginTop: '1%',
      marginBottom: '5%',
      marginLeft: '2%',
    },
    image: {
      width: width * 0.90,
      height: height * 0.5,
      opacity: 0.7,
      marginLeft: '2%'
    },
    text: {
      fontSize: 30,
      textAlign: 'center',
      color: 'white',
    },
    shareButton: {
      marginLeft: '5%',
      marginRight: '5%',
      marginTop: '7%',
      borderRadius: 6,
      backgroundColor: '#268dee',
      padding: '4%',
    },
    shareButtonText: {
      fontSize: 20,
      color: '#fff'
    }
  });

  const [shareVisible, setShareVisible] = useState<boolean>(false);
  const shareMessage = `I am Inviting you to play the COVID SMASH Game to help Spread the Information on how you can protect yourself from COVID-19. I just played it And I got  a ${getLevel(
    scores
  ).toUpperCase()} Badge`;
  return (
    <View>
      <ImageBackground
        source={require('../assets/buried.jpg')}
        style={styles.image}>
        <View style={styles.view}>
          <Text style={styles.text}>You buried COVID Alive</Text>
        </View>
        {shareVisible && (
          <ShareModal
            show={shareVisible}
            setShow={(bool) => {
              setShareVisible(bool);
            }}
            shareObject={{
              whatsAppMessage: shareMessage,
              facebookShareMessage: shareMessage,
              twitterShareMessage: shareMessage
            }}
          />
        )}
      </ImageBackground>
      <SimpleButton
        style={styles.shareButton}
        onClick={() => {
          setShareVisible(!shareVisible);
        }}
        title="Share Score With Friends"
        textStyle={styles.shareButtonText}
      />
    </View>
  );
};

export default EndPage;
