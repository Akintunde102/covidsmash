import React, {useState} from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import SimpleButton from './SimpleButton';
import BoxedShare from './BoxedShare';

import {IShareData} from '../preloaded_data';

const ShareModal = ({show, setShow, shareObject = {}}: {show: boolean; setShow: (bool: boolean)=> void; shareObject: IShareData}) => {
    const styles = StyleSheet.create({
    scrollview: {
      margin: '3%',
      marginBottom: 0,
      flex: 9,
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
    header: {
      flex: 2,
    },
    bottomBottonView: {
      flex: 1,
      flexDirection: 'row',
    },
    simpleButton: {
      paddingTop: '5%',
      paddingBottom: '5%',
      paddingLeft: '2%',
      paddingRight: '4%',
      flex: 1,
      borderRightColor: '#000',
      borderRightWidth: 2,
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
    ShareTitle: {
      fontSize: 20,
    },
  });

    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={show}
        onRequestClose={() => {
          setShow(false);
        }}>
        <View style={styles.modal}>
          <View style={styles.secondaryModalView}>
            <View
              style={{
                ...styles.modalHeaderView,
                backgroundColor: '#dfe5e8',
                alignItems: 'center',
                justifyContent: 'center',
                height: '5%',
                width: '100%',
              }}>
              <SimpleButton
                style={{
                  position: 'absolute',
                  left: '2%',
                }}
                onClick={() => {
                  setShow(false);
                }}
                title="X"
              />
              <Text style={styles.ShareTitle}>Share Scores!</Text>
            </View>
            <BoxedShare
              whatsAppMessage={shareObject.whatsAppMessage}
              facebookShareURL={shareObject.facebookShareURL}
              facebookShareMessage={shareObject.facebookShareMessage}
              twitterShareURL={shareObject.twitterShareURL}
              twitterShareMessage={shareObject.twitterShareMessage}
              twitterViaAccount={shareObject.twitterViaAccount}
              nativeShareTitle={shareObject.nativeShareURL}
              nativeShareMessage={shareObject.nativeShareMessage}
              nativeShareURL={shareObject.nativeShareURL}
              customStyle={{}}
            />
          </View>
        </View>
      </Modal>
    );
};

export default ShareModal;
