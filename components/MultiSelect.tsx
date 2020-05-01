import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {capitalize} from '../utils';

export enum DesignEnum {
  one = 'one',
  two = 'two',
}
const MultiSelect = ({
  items = [],
  style,
  onUpdate,
  design = DesignEnum.one,
}: {
  items?: (string | number)[];
  style?: any;
  onUpdate(itemsPicked: (string | number)[]): void;
  design?: DesignEnum;
}) => {
  const [itemPicked, setItemPicked] = useState<(string | number)[]>([]);

  const onPressChange = (item: string | number) => {
    const itemList = [...itemPicked];
    const itemPosition = itemPicked.indexOf(item);
    if (itemPosition > -1) {
      itemList.splice(itemPosition, 1);
    }
    if (itemPosition === -1) {
      itemList.push(item);
    }
    setItemPicked([...new Set([...itemList])]);

    onUpdate(itemList);
  };

  let Options;

  if (design === DesignEnum.one) {
    Options = items.map((item, index) => {
      return (
        <TouchableHighlight
          onPress={() => {
            onPressChange(item);
          }}
          underlayColor="white"
          key={index}>
          <View style={styles.option}>
            <Icon
              style={styles.icon}
              name={
                itemPicked.indexOf(item) > -1
                  ? 'md-square'
                  : 'md-square-outline'
              }
              color="#4F8EC7"
            />
            <Text style={styles.optionText}>{item}</Text>
          </View>
        </TouchableHighlight>
      );
    });
  }

  if (design === DesignEnum.two) {
    const stylesTwo = {
      view: {
        color: '#1b4468',
        paddingTop: '3%',
        paddingBottom: '3%',
        marginRight: '3%',
      },
      icon: {
        fontSize: 32,
        position: 'absolute',
        marginLeft: '90%',
        marginTop: '0.4%',
        marginRight: 0,
        fontWeight: 'bold'
      },
      optionText: {
        fontSize: 18,
        color: 'white',
        paddingLeft: '1%',
        paddingRight: '4%',
        marginLeft: '1.2%',
        marginRight: '5%'
      },
      touchable: {
        padding: 0,
        borderColor: '#1b4468',
        borderWidth: 4,
        borderRadius: 17,
        marginBottom: '1.5%',
      }
    };
    Options = items.map((item, index) => {
      return (
        <TouchableHighlight
          style={stylesTwo.touchable}
          onPress={() => {
            onPressChange(item);
          }}
          underlayColor="#efccb5"
          key = {index}>
          <View style={{...stylesTwo.view}}>
            {itemPicked.indexOf(item) > -1 ? (
              <Icon
                style={stylesTwo.icon}
                name="md-checkmark-circle"
                color="#4F8EC7"
              />
            ) : (
              <Icon
                style={stylesTwo.icon}
                name="ios-radio-button-off"
                color="#1b4468"
              />
            )}
            <Text style={{...stylesTwo.optionText}}>{capitalize(item)}</Text>
          </View>
        </TouchableHighlight>
      );
    });
  }

  return <View style={style}>{Options}</View>;
};

interface IStyles {
  option: ViewStyle;
  icon: TextStyle;
  optionText: TextStyle;
}
const styleObj: IStyles = {
  option: {
    padding: '2%',
    borderBottomColor: '#ddd',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: 25,
    flex: 1,
    width: 5,
  },
  optionText: {
    fontSize: 18,
    flex: 15,
    width: 50,
  },
};
const styles = StyleSheet.create(styleObj);

export default MultiSelect;
