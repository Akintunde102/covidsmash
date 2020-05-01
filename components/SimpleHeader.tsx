import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const SimpleHeader = ({
  style,
  title = 'Submit',
  backAction,
}: {
  style?: ViewStyle;
  title: string;
  backAction: () => void;
}) => {
  const styles = StyleSheet.create({
    innerView: {
      marginLeft: '2%',
      marginRight: '2%',
      flex: 1,
      flexDirection: 'row',
      paddingTop: '2%',
    },
    text: {
      color: 'white',
      fontSize: 20,
      fontWeight: '200',
      textAlign: 'center',
      flex: 8,
      paddingRight: '20%',
    },
    icon: {
      fontSize: 32,
      fontWeight: 'bold',
      flex: 2,
    },
  });

  return (
    <View style={style}>
      <View style={styles.innerView}>
        <TouchableWithoutFeedback onPress={backAction}>
          <Icon style={styles.icon} name="md-arrow-round-back" color="#fff" />
        </TouchableWithoutFeedback>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

export default SimpleHeader;
