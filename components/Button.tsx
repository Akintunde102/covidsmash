import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  ViewStyle
} from 'react-native';

const Button = ({customStyle, title = 'Submit', onSubmit}: {
  customStyle?: ViewStyle;
  title: string;
  onSubmit: Function
}) => {
  const styles = StyleSheet.create({
    view: {
      margin: 0,
      backgroundColor: '#268dee',
      padding: '4%',
    },
    text: {
      color: 'white',
      fontSize: 20,
      fontWeight: '200',
      textAlign: 'center',
    },
  });

  return (
    <TouchableHighlight
      onPress={() => {
        onSubmit();
      }}
      underlayColor="rgba(38,141,238,0.4)"
      style={{...styles.view, ...customStyle}}>
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
};

export default Button;
