import { BehaviorSubject } from 'rxjs';
import dayjs from 'dayjs';

import { calcSundays } from '~/shared/lib/dates';

const END_DATE = dayjs().add(2, 'years').toDate();
const START_DATE = dayjs().toDate();

const initialState = {
  startDate: START_DATE,
  endDate: END_DATE,
  count: 0,
};

let state = initialState;

const subject = new BehaviorSubject(initialState);

const sundayStore = {
  subscribe: (
    setState: React.Dispatch<React.SetStateAction<typeof initialState>>
  ) => subject.subscribe(setState),
  init: () => {
    const count = calcSundays(state.startDate, state.endDate);

    state = {
      ...state,
      count,
    };

    subject.next(state);
  },
  setStartDate: (date: Date) => {
    let endDate = state.endDate;

    if (dayjs(date).diff(endDate, 'years') < 2) {
      endDate = dayjs(date).add(2, 'years').toDate();
    }

    const count = calcSundays(date, endDate);

    state = {
      ...state,
      startDate: date,
      endDate,
      count,
    };

    subject.next(state);
  },
  setEndDate: (date: Date) => {
    const count = calcSundays(state.startDate, date);

    state = {
      ...state,
      endDate: date,
      count,
    };

    subject.next(state);
  },
  initialState,
};

export default sundayStore;
