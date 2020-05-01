import React, {useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Linking,
  Alert,
  Share,
  Platform,
  ViewStyle,
} from 'react-native';

let facebookParameters = '';
let twitterParameters = '';

const {width: imageWidth, height: imageHeight} = {
  width: 50,
  height: 50
}

// Whatsapp Brand Resources forcing to use ios icon for only ios so we heft to use different logos for be legal.
const WhatsappShareIcon = () => {
  if (Platform.OS == 'ios') {
    return (
      <Image
        style={{width: imageWidth, height: imageHeight, alignSelf: 'center', marginBottom: 5}}
        source={require('../assets/social_media/whatsapp-ios.png')}></Image>
    );
  } else if (Platform.OS == 'android') {
    return (
      <Image
        style={{width: imageWidth, height: imageHeight, alignSelf: 'center', marginBottom: 5}}
        source={require('../assets/social_media/whatsapp-android.png')}></Image>
    );
  }
};

const BoxedShare = ({
  facebookShareURL,
  facebookShareMessage,
  twitterShareMessage,
  twitterShareURL,
  twitterViaAccount,
  whatsAppMessage,
  nativeShareMessage,
  nativeShareURL,
  nativeShareTitle,
  customStyle = {},
}: {
  facebookShareURL?: string;
  facebookShareMessage?: string;
  twitterShareMessage?: string;
  twitterShareURL?: string;
  twitterViaAccount?: string;
  whatsAppMessage?: string;
  nativeShareMessage?: string;
  nativeShareURL?: string;
  nativeShareTitle?: string;
  customStyle?: ViewStyle;
}) => {
  const buildUrlStringFromProps = () => {
    const andOrQuestionMark = (parameters: string): string =>
      parameters.includes('?') ? '&' : '?';
    if (facebookShareURL) {
      facebookParameters = `${facebookParameters}${andOrQuestionMark(
        facebookParameters,
      )}u=${encodeURI(facebookShareURL)}`;
    }
    if (facebookShareMessage) {
      facebookParameters = `${facebookParameters}${andOrQuestionMark(
        facebookParameters,
      )}quote=${encodeURI(facebookShareMessage)}`;
    }
    if (twitterShareURL) {
      twitterParameters = `${twitterParameters}${andOrQuestionMark(
        twitterParameters,
      )}&url=${encodeURI(twitterShareURL)}`;
    }
    if (twitterShareMessage) {
      twitterParameters = `${twitterParameters}${andOrQuestionMark(
        twitterParameters,
      )}&text=${encodeURI(twitterShareMessage)}`;
    }
    if (twitterViaAccount) {
      twitterParameters = `${twitterParameters}${andOrQuestionMark(
        twitterParameters,
      )}?via=${encodeURI(twitterViaAccount)}`;
    }
  };

  useEffect(() => {
    buildUrlStringFromProps();
  }, []);

  return (
    <View style={{...styles.ShareArea, ...customStyle}}>
      <View style={styles.ShareItems}>
        <TouchableOpacity
          onPress={() => {
            let url = `whatsapp://send?text=${whatsAppMessage}`;
            Linking.openURL(url)
              .then((data) => {
                console.log('open whatsapp', {whatsAppdata: data});
              })
              .catch(() => {
                Alert.alert(
                  'Error',
                  'Make sure Whatsapp installed on your device',
                );
                console.log(
                  'whatsappError',
                  'Make sure Whatsapp installed on your device',
                );
              });
          }}>
          {WhatsappShareIcon()}
          <Text>WhatsApp</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ShareItems}>
        <TouchableOpacity
          onPress={() => {
            let url =
              'https://www.facebook.com/sharer/sharer.php' + facebookParameters;
            Linking.openURL(url)
              .then((data) => {
                console.log('open facebook');
              })
              .catch(() => {
                Alert.alert('Error', 'An error occurred while share');
              });
          }}>
          <Image
            source={require('../assets/social_media/facebook.png')}
            style={{width: imageWidth, height: imageHeight,
              alignSelf: 'center',
              marginBottom: 5,
            }}
          />
          <Text>Facebook</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ShareItems}>
        <TouchableOpacity
          onPress={() => {
            console.log(twitterShareURL);
            let url = `https://twitter.com/intent/tweet${twitterParameters}`;
            Linking.openURL(url)
              .then((data) => {
                console.log('open twitter', {twitterData: data});
              })
              .catch(() => {
                Alert.alert('Error', 'An error occurred while share');
              });
          }}>
          <Image
            source={require('../assets/social_media/twitter.png')}
            style={{width: imageWidth, height: imageHeight,
              alignSelf: 'center',
              marginBottom: 5,
            }}></Image>
          <Text>Twitter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ShareItems}>
        <TouchableOpacity
          onPress={() => {
            Share.share({
              message: nativeShareMessage ? nativeShareMessage : null,
              url: nativeShareURL ? nativeShareURL : null, //only for ios
              title: nativeShareTitle ? nativeShareTitle : null,
            });
          }}>
          <Image
            source={require('../assets/social_media/more.png')}
            style={{width: imageWidth, height: imageHeight,
              alignSelf: 'center',
              marginBottom: 5,
            }}></Image>
          <Text style={{textAlign: 'center', fontSize: 13}}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  ShareArea: {
    backgroundColor: '#e4eaed',
    width: '100%',
    alignSelf: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ShareTitle: {
    fontSize: 20,
  },
  ShareItems: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '4%',
    paddingBottom: '4%',
    paddingLeft: '1%',
  },
});

export default BoxedShare;
