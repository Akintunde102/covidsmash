import React from 'react';
import {View, Text, StyleSheet, Alert, ViewStyle} from 'react-native';
import {IQuestionsSchema} from '../databases/allSchemas';
import Question from './Question';

const Questions = ({
  customStyle,
  questions,
  presentQuestion,
  isPassed,
  failed,
}: {
  questions: IQuestionsSchema[];
  presentQuestion: number;
  isPassed: Function;
  customStyle: ViewStyle;
  failed: number;
}) => {
  const dataLength = questions.length;
  const {questionText, options} = questions[presentQuestion];

  console.log({failed});

  return (
    <View style={{...styles.question, ...customStyle}}>
      <View style={{height: "8%"}}>
      <Text style={styles.textTitle}>
        Question {presentQuestion + 1}
        <Text style={styles.smallText}>/ {dataLength}</Text>
      </Text>
      {failed>0 && (<Text style={styles.failedTextTitle} > Failed: {failed}  </Text>) }
      </View>
      
      <View style={styles.dottedLine} />
      <Question
        questionText={questionText}
        options={options}
        isPassed={isPassed}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 27,
    color: '#7f88b0',
    fontWeight: '700',
    position: "absolute"
  },
  failedTextTitle: {
    position: "absolute",
    fontSize: 27,
    color: 'red',
    fontWeight: '400',
    right: 0
  },
  dottedLine: {
    height: '0.2%',
    borderRadius: 1,
    borderStyle: 'dashed',
    borderWidth: 1,
    width: '95%',
    borderColor: 'rgba(140, 149, 190, 0.3)',
  },
  smallText: {
    fontSize: 18,
    fontWeight: '300',
    letterSpacing: -3,
  },
  question: {
  }
});

export default Questions;
