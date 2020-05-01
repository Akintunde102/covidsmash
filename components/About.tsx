import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ViewStyle,
  StatusBar,
  BackHandler,
  Animated,
  Linking,
  TouchableWithoutFeedback,
} from 'react-native';
import {material} from 'react-native-typography';
import {peopleData, IPeopleData} from '../preloaded_data';
import SimpleHeader from './SimpleHeader';
import {createMailLink} from '../utils';
import AboutApp from './AboutApp';

const About = ({
  customStyles,
  backAction,
}: {
  customStyles: ViewStyle;
  backAction: () => boolean;
}) => {
  const [data, setData] = useState<IPeopleData[]>(peopleData);
  const [aboutVisible, setAboutVisible] = useState<boolean>(false);

  const goTo = (url: string) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, []);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ddd',
      height: '100%',
      ...customStyles,
    },
    header: {
      backgroundColor: '#202849',
      height: '7%',
      borderTopColor: '#fff',
      borderTopWidth: 2,
    },
    userList: {},
    cardContent: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      paddingTop: '3%',
      paddingBottom: '3%',
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
    },
    cardFirstColumn: {
      flex: 1,
      marginLeft: '5%',
      marginTop: '5%',
      marginBottom: '4%',
    },
    cardSecondColumn: {
      flex: 2,
      textAlign: 'left',
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 45,
    },
    card: {
      borderColor: '#ddd',
      borderBottomWidth: 2,
      borderTopWidth: 2,
    },
    name: {
      fontSize: 20,
      color: '#008080',
      fontWeight: 'bold',
      lineHeight: 25,
    },
    position: {
      fontSize: 20,
      color: '#696969',
      lineHeight: 25,
    },
    about: {
      marginHorizontal: 10,
    },
    followButton: {},
    followButtonText: {
      color: '#FFFFFF',
      fontSize: 20,
    },
    popup: {
      backgroundColor: 'white',
      marginTop: 80,
      marginHorizontal: 20,
      borderRadius: 7,
    },
    popupOverlay: {
      backgroundColor: '#00000057',
      flex: 1,
      marginTop: 30,
    },
    popupContent: {
      margin: 5,
      height: 250,
    },
    popupHeader: {
      marginBottom: 45,
    },
    popupButtons: {
      marginTop: 15,
      flexDirection: 'row',
      borderTopWidth: 1,
      borderColor: '#eee',
      justifyContent: 'center',
    },
    popupButton: {
      flex: 1,
      marginVertical: 16,
    },
    btnClose: {
      height: 20,
      backgroundColor: '#20b2aa',
      padding: 20,
    },
    modalInfo: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    txtClose: {},
    listContainer: {},
    socialMediaLink: {
      fontSize: 14,
    },
    socialMediaType: {
      fontSize: 16,
    },
    aboutView: {
      backgroundColor: '#202849',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 100,
      elevation: 1,
      borderLeftWidth: 4,
      borderRightWidth: 4,
      borderColor: '#ddd',
    },
    aboutText: {
      ...material.body1,
      color: '#ddd',
      padding: '2%',
      fontSize: 14,
      lineHeight: 24,
    },
    aboutAppView: {
      backgroundColor: '#202849',
      height: '7%',
    },
    aboutApptext: {
      fontSize: 20,
      fontWeight: '200',
      textAlign: 'center',
      flex: 8,
      color: '#fff',
      paddingTop: '2%',
    },
    mailLink: {color: '#fff', fontWeight: '500'},
  });

  return (
    <Animated.View style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor="#262e4f"
        barStyle="light-content"
      />
      {aboutVisible && (
        <AboutApp
          show={aboutVisible}
          setShow={(bool) => {
            setAboutVisible(bool);
          }}
          backAction={()=>{
            backAction();
            return true;
          }}
        />
      )}
      <SimpleHeader
        title="The Team"
        backAction={() => {
          backAction();
        }}
        style={styles.header}
      />
      <FlatList
        style={styles.userList}
        data={data}
        keyExtractor={(item) => {
          return String(item.id);
        }}
        renderItem={({item}) => {
          const link = item.twitter
            ? 'http://twitter.com/' + item.twitter
            : 'http://instagram.com/' + item.instagram;
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                goTo(link);
              }}>
              <View style={styles.cardContent}>
                <View style={styles.cardFirstColumn}>
                  <Image style={styles.image} source={item.image} />
                </View>
                <View style={styles.cardSecondColumn}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.position}>{item.position}</Text>
                  {item.twitter ? (
                    <Text
                      style={styles.socialMediaLink}
                      onPress={() => goTo(link)}>
                      <Text style={styles.socialMediaType}>Twitter:</Text> @
                      {item.twitter}
                    </Text>
                  ) : (
                    <Text
                      style={styles.socialMediaLink}
                      onPress={() => goTo(link)}>
                      <Text style={styles.socialMediaType}>Instagram:</Text> @
                      {item.instagram}
                    </Text>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <View style={styles.aboutAppView}>
        <TouchableWithoutFeedback onPress={()=>{
          setAboutVisible(true);
        }}>
          <Text style={styles.aboutApptext}>Read More About the Game </Text>
        </TouchableWithoutFeedback>
      </View>
    </Animated.View>
  );
};

export default About;
