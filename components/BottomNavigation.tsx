import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
const BottomNavigation = ({children, customStyles}: {
  children: React.ReactChild,
  customStyles?: ViewStyle
}) => {
  const styles = StyleSheet.create({
    view: {  
      backgroundColor: '#fff',
      textAlign: 'center'
    },
  });

  return (
    <View style={{...styles.view,...customStyles}}>
      {children}
    </View>
  );
};

export default BottomNavigation;
