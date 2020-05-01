import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import credentials from '../app.credentials';

export default function keyStorage(key: string | number, value?: string) {
  const storageKey = `@${credentials.appName}:${key}`;
  return {
    get: function () {
      try {
        const value = AsyncStorage.getItem(storageKey);
        return value;
      } catch (error) {
        Alert.alert('asyncStorageError', `error:${error}, value:${value}`);
      }
    },
    set: function () {
      try {
        if (!value) {
          throw 'value is not given in setOperation';
        }
        AsyncStorage.setItem(storageKey, value);
        return value;
      } catch (error) {
        Alert.alert('asyncStorageError', `error:${error}, value:${value}`);
      }
    },
  };
}
