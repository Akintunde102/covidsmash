import Realm from 'realm';
import Data, {IData, OptionsType} from '../preloaded_data/data';
import {asyncForEach} from '../utils';

export enum SchemaEnum {
  Questions = 'Questions',
  Options = 'Options',
}

export enum GameStateEnum {
  Start = 'Start',
  InProgress = 'In Progress',
  End = 'End'
}


export interface IOptionsSchema {
  id: number,
  questionId: number,
  text: string,
  correctness: boolean,
}

export interface IQuestionsSchema {
  id: number,
  questionText: string,
  type: string,
  options: IOptionsSchema[],

}

export const QUESTIONS_SCHEMA = SchemaEnum.Questions;
export const OPTIONS_SCHEMA = SchemaEnum.Options;

export const questionsSchema = {
  name: QUESTIONS_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    questionText: {type: 'string', indexed: true},
    type: {type: 'string', indexed: true},
    options: {type: 'list', objectType: OPTIONS_SCHEMA},
  },
};

export const optionsSchema = {
  name: OPTIONS_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    questionId: 'int',
    text: {type: 'string', indexed: true},
    correctness: {type: 'bool', default: false},
  },
};

const databaseOptions = {
  path: 'covidgame.realm',
  schema: [questionsSchema, optionsSchema],
  schemaVersion: 2,
};

export const queryAll = (which: SchemaEnum): Promise<IQuestionsSchema[]|IOptionsSchema[]| string> =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        const all = realm.objects(which);
        resolve(all);
      })
      .catch((error) => {
        reject(error);
        throw error;
      });
  });

export const insertNewQuestion = (newQuestion: any) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          const createObject = realm.create(QUESTIONS_SCHEMA, newQuestion);
          resolve(createObject);
        });
      })
      .catch((error) => reject(error));
  });

export const insertNewOption = (newOption: any) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          realm.create(OPTIONS_SCHEMA, newOption);
          resolve(newOption);
        });
      })
      .catch((error) => reject(error));
  });

export const loadAllQuestions = (): Promise<{done: boolean, error?: string}> =>
  new Promise((resolve, reject) => {
    try {      
      let lastId = 0;
      for (let index = 0; index < Data.length; index++) {
        const eachData = Data[index];
        const {options, ...rest} = eachData;
        Realm.open(databaseOptions).then((realm) => {
          realm.write(() => {
            let questions = realm.create(QUESTIONS_SCHEMA, {...rest, options: [] });
            for (let i = 0; i < options.length; i++) {
              lastId++;
              questions.options.push({
                ...options[i],
                id: lastId,
                questionId: eachData.id,
              });
            }
          });
        });
      }
      resolve({done: true});
    } catch (error) {
      reject({done: false,error});
    }
  });

export const deleteAll = (which: SchemaEnum) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          let lists = realm.objects(which);
          realm.delete(lists);
          resolve({done: true});
        });
      })
      .catch((error) => reject({done: false, error}));
  });

export const deleteEverything = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.deleteAll();
        resolve({done: true});
      })
      .catch((error) => reject({done: false, error}));
  });

export default new Realm(databaseOptions);
/*
export const updateTodoList = todoList => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        realm.write(() => {
            let updatingTodoList = realm.objectForPrimaryKey(TODOLIST_SCHEMA, todoList.id);   
            updatingTodoList.name = todoList.name;    
            resolve();     
        });
    }).catch((error) => reject(error));;
});
export const deleteTodoList = todoListId => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        realm.write(() => {
            let deletingTodoList = realm.objectForPrimaryKey(TODOLIST_SCHEMA, todoListId);
            realm.delete(deletingTodoList);
            resolve();   
        });
    }).catch((error) => reject(error));;
});

*/
