import React, { memo } from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import Loader from './Loader';
 
const Header = ({gameProgress, customStyles}: {gameProgress: number, customStyles: ViewStyle}) => {
  console.log({HgameProgress: gameProgress});
  const styles = StyleSheet.create({
    view: {
      fontSize: 18,
      textAlign: 'left',
      padding: '0.2%',
      marginBottom: '0.5%',
    },
  });


  const textManipulation = (x: number) => `${x}Points`;

  return (
    <View style={{...styles.view, ...customStyles}}>
      <Loader
        gradientColor={['#f25280', '#dd5caa', '#c468db']}
        presentProgress={gameProgress}
        textManipulation={textManipulation}
        inputRange={[0, 10000]}
      />
    </View>
  );
};

export default memo(Header);
