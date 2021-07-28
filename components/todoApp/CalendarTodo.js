import React from 'react';
import {Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';

export default function CalendarTodo({onDate}) {
  const currentDate = moment(new Date()).format('yyyy-MM-DD');

  return (
    <Calendar
      current={currentDate}
      minDate={currentDate}
      onDayPress={day => {
        return onDate(day);
      }}
      onDayLongPress={day => {
        return onDate(day);
      }}
      monthFormat={'MM yyyy'}
      disableAllTouchEventsForDisabledDays={true}
      renderHeader={date => {
        return (
          <View key={date}>
            <Text>{date.toString('MMM yyyy')}</Text>
          </View>
        );
      }}
      enableSwipeMonths={true}
    />
  );
}
