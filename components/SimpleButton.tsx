import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  ViewStyle, 
  Dimensions,
  TextStyle
} from 'react-native';


const  {fontScale} = Dimensions.get('window');

const SimpleButton = ({style, title = 'Submit', onClick, textStyle, linkUnderLayColor='rgba(38,255,255,0.4)'}: {
  style?: ViewStyle;
  title: string;
  textStyle?: TextStyle
  onClick: Function,
  linkUnderLayColor?: string;
}) => {
  const styles = StyleSheet.create({
    view: {
    },
    text: {
      color: 'black',
      fontSize: 16/fontScale,
      fontWeight: '200',
      textAlign: 'center',
      padding: '1%'
    },
  });

  return (
    <TouchableHighlight
      onPress={() => {
        onClick();
      }}
      underlayColor={linkUnderLayColor}
      style={{...styles.view, ...style}}>
      <Text style={{...styles.text,...textStyle}}>{title}</Text>
    </TouchableHighlight>
  );
};

export default SimpleButton;
