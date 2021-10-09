import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View
  // StyleSheet,
} from 'react-native';

import TestCalendar from './src/components/TestCalendar';
import Button from './src/components/Button';

type savedDatesState = string[];
const initialSavedDatesState = [] as savedDatesState;

const App = () => {
  const [savedDates, setSavedDates] = useState<savedDatesState>(initialSavedDatesState);
  const [isCalendarShow, setIsCalendarShow] = useState<boolean>(false);

  const onPressButton = () => {
    setIsCalendarShow(prevState => !prevState);
  }
  const handleSavedDatesUpdate = (selectedDay:any) => {
    const dateString: string = selectedDay.dateString
    setSavedDates(prevState => [...prevState, dateString]);
  }
  return (
    <SafeAreaView >
      <ScrollView>
        <Button onPress={onPressButton} title="달력 보기" />
        {
          isCalendarShow ? (
            <TestCalendar 
              onDayPress={handleSavedDatesUpdate}
              savedDates={savedDates}
            />
          ) : (
            <View/>
          )
        }
      </ScrollView>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
