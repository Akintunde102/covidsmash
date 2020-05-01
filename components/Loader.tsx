import React, {useRef, useState, useEffect} from 'react';
import {Text, View, StyleSheet, Animated, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/EvilIcons';
import {useInterval} from '../utils';

const startProgressLimit = 10

const Loader = ({
  gradientColor = ['#4c669f', '#3b5998', '#192f6a'],
  startProgress,
  presentProgress,
  customStyle,
  textManipulation,
  inputRange = [0, 100]
}: {
  gradientColor?: string[];
  startProgress?: number;
  presentProgress: number;
  customStyle?: ViewStyle;
  textManipulation?: Function,
  inputRange?: number[]
}) => {
  if (!startProgress || startProgress < startProgressLimit){
    startProgress = presentProgress || startProgressLimit;
  }
  let animation = useRef(new Animated.Value(0));
  
  const [updatedProgress, setProgress] = useState(startProgress);

  if (!presentProgress){
    useInterval(() => {
      if (updatedProgress < 100) {
        setProgress(updatedProgress + 5);
      }
    }, 1000);
  }

  useEffect(()=>{
    setProgress(presentProgress);
  },[presentProgress])

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: updatedProgress,
      duration: 100,
      useNativeDriver: false
    }).start();
  }, [updatedProgress]);
  
  const width = animation.current.interpolate({
    inputRange,
    outputRange: ['0%', '100%'],
    extrapolate: 'extend',
  });

  return (
    <View style={{...styles.container, ...customStyle}}>
      <View style={styles.progressBar}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={gradientColor}
          style={{
            borderRadius: 30,
            width: `${updatedProgress/(inputRange[1]/100)}%`,
          }}>
          <Animated.View
            style={{
              borderRadius: 30,
              position: 'absolute',
              height: 50,
              width,
            }}
          />
        </LinearGradient>
          <Text style={styles.loadText}>{textManipulation ? textManipulation(updatedProgress) : updatedProgress}</Text>
        <Icon name="star" style={styles.icon} size={41} color="#979cbb" />
        <Icon name="star" style={styles.icon} size={41} color="#979cbb" />
        <Icon name="star" style={styles.icon} size={41} color="#979cbb" />
        <Icon name="star" style={styles.icon} size={41} color="#979cbb" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomEndRadius: 10,
  },
  progressBar: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    borderColor: '#3c4467',
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderRadius: 30,
  },
  loadText: {
    margin: 1,
    color: 'white',
    marginLeft: '35%',
    marginRight: '10%',
    position: 'absolute',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: '2%',
    fontSize: 21
  },
  icon: {
    marginTop: 5,
    fontWeight: 'bold',
    position: 'absolute',
    marginLeft: '89%'
  }
});

export default Loader;
