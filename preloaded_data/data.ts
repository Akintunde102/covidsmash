export enum FieldTypes {
  multiple = 'multiple choice',
  single = 'single choice',
}

export type OptionsType = {text: string | number; correctness: boolean};

export interface IData {
  id: number;
  questionText: string;
  type: FieldTypes;
  options: OptionsType[];
}

export const fieldType = {
  multiple: 'multiple choice',
  single: 'single choice',
};

const data: IData[] = [
  {
    id: 1,
    questionText:
      'Is alcohol-based sanitizer an alternative to soap and water?.',
    type: FieldTypes.single,
    options: [
      {text: 'True', correctness: true},
      {text: 'False', correctness: false},
    ],
  },
  {
    id: 2,
    questionText: 'While washing your hands, you should....',
    type: FieldTypes.single,
    options: [
      {text: 'Scrub the back and front of your hands', correctness: true},
      {text: 'Scrub between your fingers', correctness: true},
      {text: 'Spend at most 5 seconds doing it', correctness: false},
      {text: 'Spend at least 20 seconds doing it', correctness: true},
      {text: 'Use soap and  water', correctness: true},
    ],
  },
  {
    id: 3,
    questionText: 'How is COVID-19 spread?',
    type: FieldTypes.multiple,
    options: [
      {text: 'Coughing and sneezing', correctness: true},
      {text: 'Calling over A 4G or 5G network', correctness: false},
      {text: 'Touching contaminated objects', correctness: true},
      {text: 'Eating Certain Types of food', correctness: false},
      {text: 'Staying inside too much', correctness: false},
    ],
  },
  {
    id: 4,
    questionText:
      'Can you contract COVID-19 from someone who does not show symptoms?',
    type: FieldTypes.single,
    options: [
      {text: 'True', correctness: true},
      {
        text: 'False',
        correctness: false,
      },
    ],
  },

  {
    id: 5,
    questionText:
      'it is important to call the hospital to ask for extra advice before going in person because....',
    type: FieldTypes.single,
    options: [
      {
        text: 'You may need to visit a different Health Facility',
        correctness: true,
      },
      {
        text: 'Early Diagnosis is not that important',
        correctness: false,
      },
      {
        text: 'It is important to protect vulnerable patients ',
        correctness: true,
      },
      {text: 'They may recommend that you stay at home ', correctness: true},
      {
        text:
          'There is a limited number of doctors and many serious cases may need to be prioritize.',
        correctness: true,
      },
      {text: 'None of the Above', correctness: false},
    ],
  },
  {
    id: 6,
    questionText:
      'We have strong evidence to believe that COVID-19 will disappear in the next 30 days',
    type: FieldTypes.single,
    options: [
      {text: 'True', correctness: false},
      {text: 'False', correctness: true},
    ],
  },
  {
    id: 7,
    questionText:
      "If you can't wash your hands with soap and water,  alcohol-based sanitizer are a good alternative",
    type: FieldTypes.single,
    options: [
      {text: 'True', correctness: true},
      {text: 'False', correctness: false},
    ],
  },
  {
    id: 8,
    questionText:
      "Even if Covid 19 doesn't make you sick it is important to avoid spreading it to vulnerable groups like",
    type: FieldTypes.single,
    options: [
      {text: 'People with diabetes', correctness: true},
      {text: 'People With Heart Diseases', correctness: true},
      {text: 'People With Lung Diseases', correctness: true},
      {text: 'The Elderly', correctness: true},
    ],
  },
  {
    id: 9,
    questionText:
      ' You should call to get the advice of a doctor or local health official if',
    type: FieldTypes.single,
    options: [
      {
        text: ' You think you are exhibiting the symptoms of COVID-19',
        correctness: true,
      },
      {
        text:
          'you live in or have recently traveled to an area deemed high risk ',
        correctness: true,
      },
      {text: 'You high-fived someone last month', correctness: true},
      {
        text:
          "You've been in contact with someone who tested positive for covid 19 or exhibited symptoms",
        correctness: false,
      },
    ],
  },
  {
    id: 10,
    questionText:
      ' Practicing social distancing means any of the following except ...',
    type: FieldTypes.single,
    options: [
      {
        text: 'Staying at least six feet away from others whenever possible',
        correctness: false,
      },
      {
        text:
          'Being in a Large Crowded Gathering As long as you were all sanitized at the point of entry',
        correctness: false,
      },
    ],
  },
  {
    id: 11,
    questionText:
      "If you don't have any symptoms you definitely are not contagious",
    type: FieldTypes.single,
    options: [
      {
        text: 'True',
        correctness: false,
      },
      {text: 'False', correctness: true},
    ],
  },
  {
    id: 12,
    questionText: 'What are the symptoms of COVID 19?',
    type: FieldTypes.single,
    options: [
      {
        text: 'Leg Swelling',
        correctness: false,
      },
      {
        text: 'Cough',
        correctness: true,
      },
      {
        text: 'Shortness of breath',
        correctness: true,
      },
      {
        text: 'Fever',
        correctness: true,
      },
    ],
  },
  {
    id: 13,
    questionText:
      'Can coronavirus be transmitted from an uninfected mother to a child?',
    type: FieldTypes.single,
    options: [
      {
        text: 'True',
        correctness: false,
      },
      {
        text: 'False',
        correctness: true,
      },
    ],
  },
  {
    id: 14,
    questionText:
      'You should call to get the advice of a doctor or local health official if..',
    type: FieldTypes.single,
    options: [
      {
        text: 'You think you are exhibiting the symptoms of COVID 19.',
        correctness: true,
      },
      {
        text:
          'You live in or have recently traveled to an area deemed high risk ',
        correctness: true,
      },
      {
        text: "You high five someone last month's",
        correctness: false,
      },
      {
        text:
          "You've been in contact with someone who tested positive for COVID 19 or exhibited symptoms ",
        correctness: true,
      },
    ],
  },
  {
    id: 15,
    questionText: 'When should one wear a disposable facemask?',
    type: FieldTypes.single,
    options: [
      {
        text: 'Every time I go out to a public gathering',
        correctness: true,
      },
      {
        text: 'Anytime I am coughing or sneezing',
        correctness: true,
      },
      {
        text: 'Taking care of a sick person',
        correctness: false,
      },
      {
        text: 'At home',
        correctness: true,
      },
    ],
  },
  {
    id: 16,
    questionText:
      'Can Someone who has been released from isolation, be considered to pose a risk of infection to others?',
    type: FieldTypes.single,
    options: [
      {
        text: 'True',
        correctness: false,
      },
      {
        text: 'False',
        correctness: true,
      },
    ],
  },
  {
    id: 17,
    questionText: 'How does coronavirus spread?',
    type: FieldTypes.single,
    options: [
      {
        text: 'From person to person',
        correctness: false,
      },
      {
        text: 'Through droplets of an infected person',
        correctness: true,
      },
      {
        text: 'Through buying foodstuff from the market ',
        correctness: false,
      },
      {
        text: 'Spread when people are in close contact with each other',
        correctness: false,
      },
    ],
  },
  {
    id: 18,
    questionText: "If you haven't washed your hands, you should avoid?",
    type: FieldTypes.single,
    options: [
      {
        text: 'Touching your face',
        correctness: true,
      },
      {
        text: 'Rubbing your eyes',
        correctness: true,
      },
      {
        text: 'Eating',
        correctness: true,
      },
      {
        text: 'Touching your body',
        correctness: false,
      },
    ],
  },
  {
    id: 19,
    questionText:
      'Which of the following helps keeps the virus from spreading?',
    type: FieldTypes.single,
    options: [
      {
        text: 'Washing your hands frequently',
        correctness: true,
      },
      {
        text: 'Cleaning the house',
        correctness: false,
      },
      {
        text: ' Staying several feet away from others ',
        correctness: true,
      },
      {
        text: 'Wearing facemasks if you are sick',
        correctness: true,
      },
    ],
  },
];

export interface IPeopleData {
  id: number;
  name: string;
  position: string;
  image: any;
  twitter?: string;
  instagram?: string;
}

export const peopleData: IPeopleData[] = [
  {
    id: 1,
    name: 'Babakemi Retiola',
    position: 'Content Creator, Contributor',
    instagram: 'kemibarbs',
    image: require('../assets/avatars/2.png'),
  },
  {
    id: 2,
    name: 'Tolulope Akinlabi',
    position: 'Contributor',
    image: require('../assets/avatars/6.png'),
    twitter: 'tolumide_',
  },
  {
    id: 3,
    name: 'Obafemi Olaoluwa',
    position: 'Graphic / UX Design, Contributor',
    image: require('../assets/avatars/7.png'),
    twitter: 'Obafemiolaoluw2',
  },
  {
    id: 4,
    name: 'Eric Vondee',
    position: 'Contributor',
    image: require('../assets/avatars/4.png'),
    twitter: 'nightblood17',
  },
  {
    id: 5,
    name: 'Ojo Victor',
    position: 'Research, Content Creation, Contributor',
    image: require('../assets/avatars/1.png'),
    twitter: 'ojovictorr',
  },
  {
    id: 6,
    
    name: 'Jegede Akintunde ',
    position: 'Software Development, Contributor',
    image: require('../assets/avatars/3.png'),
    twitter: 'akintundeJegede',
  },
  {
    id: 7,
    name: 'Dolapo Johnson',
    position: 'Contributor',
    image: require('../assets/avatars/5.png'),
    twitter: '_JDBobby',
  },
];

export default data;
