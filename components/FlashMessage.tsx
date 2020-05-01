import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ViewStyle} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export enum TypeEnum {
    Good = 'good',
    Bad = 'bad',
    special = 'special'
}

const FlashMessage = ({
  text,
  type = TypeEnum.Good,
  customStyle,
}: {
  text: string;
  customStyle: ViewStyle;
  type?: TypeEnum
}) => {
  const [show, setShow] = useState<boolean>(true);

  let styles;
  let iconProps;



  switch (type) {
      case TypeEnum.Bad:{
        styles =StyleSheet.create({
            view: {
              textAlign: 'center',
              backgroundColor: '#fff'
            },
            text: {
              color: '#222',
              fontSize: 15,
              fontWeight: '200',
              textAlign: 'center',
              padding: '1%',
            },
            icon: {
              fontSize: 18,
              textAlign: 'center',
              marginTop: '1%',
              marginBottom: 0,
              fontWeight: 'bold',
            },
          });
        iconProps={
            color: "red",
            name: "md-close"
        }
      }
          break;

          case TypeEnum.special:{
            styles =StyleSheet.create({
                view: {
                  textAlign: 'center',
                  backgroundColor: '#fff'
                },
                text: {
                  color: '#222',
                  fontSize: 17,
                  fontWeight: '200',
                  textAlign: 'center',
                  padding: '1%',
                  borderBottomColor: 'green',
                  borderBottomWidth: 2,
                },
                icon: {
                  fontSize: 18,
                  textAlign: 'center',
                  marginTop: '1%',
                  marginBottom: 0,
                  fontWeight: 'bold',
                },
              });
            iconProps={
                color: "green",
                name: "md-trophy"
            }
          }
              break;
      
      default:{
          styles = StyleSheet.create({
            view: {
              textAlign: 'center',
              backgroundColor: '#fff'
            },
            text: {
              color: 'black',
              fontSize: 15,
              fontWeight: '200',
              textAlign: 'center',
              padding: '1%',
            },
            icon: {
              fontSize: 20,
              textAlign: 'center',
              marginTop: '1%',
              marginBottom: 0,
              fontWeight: 'bold',
            },
          });
        iconProps = {
            color: "#4F8EC7",
            name: "md-checkmark"
        }
        }
          break;
  }

  return (
    <>
      {show && (
        <View style={{...customStyle, ...styles.view}}>
          <Icon
            style={{...styles.icon}}
            name= {iconProps.name}
            color={iconProps.color}
          />
          <Text style={styles.text}>{text}</Text>
        </View>
      )}
    </>
  );
};

export default FlashMessage;
