import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Dimensions,
  ScrollView,
} from 'react-native';
import {stringNumber} from '../utils/globalTypes'
import arrayEqual from '../utils/arrayEqual';
import {IOptionsSchema} from '../databases/allSchemas';
import MultiSelect, {DesignEnum} from './MultiSelect';
import Button from './Button';

const {fontScale} = Dimensions.get('window');

const Question = ({
  questionText,
  options,
  isPassed,
}: {
  questionText: string;
  options: IOptionsSchema[];
  isPassed: Function;
}) => {
  const [answers, setAnswers] = useState<stringNumber[]>([]);
  const wrongAnswers: stringNumber[] = [];
  const correctAnswers: stringNumber[] = [];

  const updateAnswers = (answers: stringNumber[]) => {
    setAnswers(answers);
    console.log(JSON.stringify({answers, options, wrongAnswers}));
  };

  const optionsTexts = options.map(({text, correctness}) => {
    if (!correctness) wrongAnswers.push(text);
    if (correctness) correctAnswers.push(text);
    return text;
  });

  // We Need to Reinitialise Answers Update
  useEffect(() => {
    setAnswers([]);
  }, [questionText]);

  const checkAnswers = async () => {
    if (answers.length === 0) {
      Alert.alert("Don't Do that", 'Provide the Correct Answers Please');
      return;
    }

    // const isFound = (a: stringNumber[], b: stringNumber[]) => a.some((ai) => b.indexOf(ai) > -1);

    if (arrayEqual(answers, correctAnswers)) {
      isPassed(true);
      return;
    }

    isPassed(false);
  };

  return (
    <View style={styles.questionView}>
      <View style={styles.questionTextView}>
        <Text style={styles.question}>{questionText}</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        style={styles.multiSelectView}>
        <MultiSelect
          style={styles.multiSelect}
          design={DesignEnum.two}
          onUpdate={updateAnswers}
          items={optionsTexts}
          key={questionText}
        />
      </ScrollView>

      <View style={styles.buttonView}>
        <Button
          onSubmit={checkAnswers}
          customStyle={styles.nextButton}
          title="Submit"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 27,
    color: '#7f88b0',
    fontWeight: '700',
  },
  dottedLine: {
    height: 1,
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
  questionTextView: {
    position: 'relative',
    height: 'auto',
    maxHeight: '30%',
    marginTop: '0.5%',
    marginLeft: '0.5%',
    marginRight: '0.5%',
  },
  question: {
    fontSize: 20 / fontScale,
    color: 'white',
    lineHeight: 35,
    fontWeight: '600',
    letterSpacing: 1,
  },
  multiSelectView: {
    position: 'relative',
    height: '40%',
    marginTop: '3%',
  },
  multiSelect: {},
  nextButton: {
    marginTop: '8%',
    marginLeft: '0.5%',
    marginRight: '0.5%',
    borderRadius: 10,
  },
  questionView: {
    flex: 1,
    flexDirection: 'column',
    flexGrow: 1,
    marginTop: '2%',
  },
  buttonView: {
    position: 'relative',
    height: '30%',
  },
});

export default Question;
