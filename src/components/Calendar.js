import { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { StyleSheet } from 'react-native';

export const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <Calendar 
      onDayPress={onDayPress}
      style={styles.calendar} 
      theme={theme}
      markedDates={getMarkedDates(selectedDate)}
      markingType={'custom'}
    />
  );
};

// 선택된 날짜에 흰색 테두리를 설정하는 함수
const getMarkedDates = (selectedDate) => ({
  [selectedDate]: {
    customStyles: {
      container: {
        borderWidth: 1,        // 테두리 두께
        borderColor: 'white',   // 테두리 색상
        borderRadius: 16,       // 원형 모양 설정
      },
      text: {
        color: 'white',         // 날짜 텍스트 색상
      },
    },
  },
});

const styles = StyleSheet.create({
  calendar: {
    borderBottomColor: 'black',
  },
});

const theme = {
  backgroundColor: '#333',
  calendarBackground: '#000',
  textSectionTitleColor: '#5a5a5a',
  todayTextColor: 'red',
  dayTextColor: 'white',
};
