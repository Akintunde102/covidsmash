import React  from 'react';
import {StyleSheet, Text, View, Linking, Modal, StatusBar, Dimensions} from 'react-native';
import {material} from 'react-native-typography';
import {createMailLink} from '../utils';
import SimpleHeader from './SimpleHeader';

const AboutApp = ({
  show,
  setShow,
  backAction,
}: {
  show: boolean;
  setShow: (bool: boolean) => void;
  backAction: () => boolean;
}) => {
  const goTo = (url: string) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={show}
      onRequestClose={() => {
        setShow(false);
      }}>
      <View style={styles.aboutView}>
        <StatusBar
          hidden={false}
          backgroundColor="#262e4f"
          barStyle="light-content"
        />
        <SimpleHeader
          title="About Covid Smash"
          backAction={() => {
            backAction();
          }}
          style={styles.header}
        />
        <Text style={styles.aboutText}>
          We built{' '}
          <Text style={{fontStyle: 'italic', fontWeight: 'bold'}}>
            COVID SMASH
          </Text>{' '}
          <Text style={{fontStyle: 'italic'}}>Beta</Text> so we could help
          sensitize people about COVID-19 without making it a chore. We know we
          have not gotten there yet and that is why your feedback is highly
          respected and expected.
          {'\n'}
          {'\n'}
          Reach us via:
          {'\n'}
          <Text
            style={styles.mailLink}
            onPress={() => {
              goTo(createMailLink('vojo28@gmail.com', 'Hello, Victor'));
            }}>
            Victor at vojo28@gmail.com
          </Text>
          {'\n'}
          <Text
            style={styles.mailLink}
            onPress={() => {
              goTo(
                createMailLink('jegedeakintunde@gmail.com', 'Hello, Victor'),
              );
            }}>
            Akintunde at jegedeakintunde@gmail.com
          </Text>
          {'\n'}
          {'\n'}
        </Text>
      </View>
    </Modal>
  );
};


const {fontScale} = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#202849',
    height: '7%',
    borderTopColor: '#fff',
    borderTopWidth: 2,
  },
  messageCustomStyle: {
    flex: 4,
    marginBottom: '2%',
  },
  questionView: {
    marginLeft: '0.5%',
    marginRight: '0.5%',
    marginBottom: '0.5%',
    flex: 15,
  },
  loadingImageBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  bottomNavigation: {
    flex: 1,
  },
  modalHeaderView: {
    padding: '5%',
  },
  modal: {
    backgroundColor: '#202849',
    height: '100%',
  },
  secondaryModalView: {
    marginRight: '4%',
    marginLeft: '4%',
    marginTop: '40%',
    backgroundColor: 'red',
  },
  aboutView: {
    backgroundColor: '#202849',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 100,
    elevation: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ddd',
    height: '100%'
  },
  aboutText: {
    ...material.button,
    color: '#ddd',
    padding: '2%',
    fontSize: 16 /fontScale,
    lineHeight: 24,
    borderTopWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  mailLink: {color: '#fff', fontWeight: '500'},
});

export default AboutApp;
