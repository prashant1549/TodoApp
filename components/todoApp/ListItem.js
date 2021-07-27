import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import moment from 'moment';

export default function ListItem({item, oneditIndex, index, onIndexCheckBox}) {
  const [timeCalculation, seTimeCalucaltion] = useState();
  const [timeInHours, setTimeInHours] = useState();

  setInterval(() => {
    const leftTime = moment(item.date + item.time, 'YYYY-MM-DDLT');
    const pastTime = moment(leftTime);
    const presentTime = moment(new Date());
    const duration = moment.duration(pastTime.diff(presentTime));
    setTimeInHours(Math.ceil(duration.asHours()));
    seTimeCalucaltion(Math.ceil(duration.asMinutes()));
  }, 1000);

  return (
    <View>
      <View style={styles.row}>
        <View stye={{flex: 1}}>
          {/* <View style={styles.checkboxContainer}> */}
          <CheckBox
            value={item.isSelected}
            disabled={false}
            onValueChange={value => onIndexCheckBox(value, index)}
            style={styles.checkbox}
          />
        </View>
        <View style={{flex: 4, justifyContent: 'center'}}>
          <Text
            style={styles.inpuText}
            numberOfLines={1}
            onPress={() => oneditIndex(index)}>
            {item.title}
          </Text>
        </View>

        <View style={{flex: 3, justifyContent: 'center'}}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'gray',
              textAlign: 'center',
              color: '#000',
            }}>
            {!timeCalculation
              ? ''
              : timeCalculation <= 0
              ? 'Time Over'
              : timeCalculation > 0 && timeCalculation < 60
              ? timeCalculation + ' min left'
              : timeInHours > 0 && timeInHours <= 24
              ? timeInHours + ' hours left'
              : Math.ceil(timeInHours / 24) + ' day left'}
          </Text>
        </View>
        <View style={{flex: 0.1, justifyContent: 'center'}}>
          <Text
            style={{
              backgroundColor:
                item.isSelected === true
                  ? 'gray'
                  : timeCalculation <= 0
                  ? 'red'
                  : timeCalculation > 0 && timeCalculation < 60
                  ? 'red'
                  : timeInHours > 0 && timeInHours <= 24
                  ? 'yellow'
                  : 'green',
              width: 12,
              height: 12,
              borderRadius: 6,
            }}></Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <View
          style={{width: 280, height: 2, borderWidth: 1, borderColor: '#fff'}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 20,
    flex: 1,
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  inpuText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 14,
    color: '#000',
  },
  border: {
    borderWidth: 1,
    borderRadius: 15,
    width: 30,
    height: 30,
    borderColor: '#DADADA',
  },
  randomcolor: {
    width: 12,
    height: 12,
    borderRadius: 12 / 2,
  },
});
