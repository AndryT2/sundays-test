import { type FC, useState, useEffect } from 'react';
import dayjs from 'dayjs';
import DatePicker from 'react-datepicker';

import sundayStore from '~/store/sunday';

import { isNotSunday } from '~/shared/lib/dates';

import styles from './sunday.module.css';

const SundaysPage: FC = () => {
  const [sundayState, setSundayState] = useState(sundayStore.initialState);

  useEffect(() => {
    const subscription = sundayStore.subscribe(setSundayState);
    sundayStore.init();

    () => {
      subscription.unsubscribe();
    }
  }, []);

  const handleStartChangeDate = (date: Date) => {
    sundayStore.setStartDate(date);
  };

  const handleEndChangeDate = (date: Date) => {
    sundayStore.setEndDate(date);
  };

  return (
    <div className={styles.sunday}>
      <DatePicker
        inline
        name="startDate"
        minDate={sundayStore.initialState.startDate}
        onChange={handleStartChangeDate}
        filterDate={isNotSunday}
      />
      <h2>{sundayState.count}</h2>
      <DatePicker
        inline
        name="endDate"
        selected={sundayState.endDate}
        onChange={handleEndChangeDate}
        minDate={dayjs(sundayState.startDate).add(2, 'years').toDate()}
      />
    </div>
  );
};

export default SundaysPage;
