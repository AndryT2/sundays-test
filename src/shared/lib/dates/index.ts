const SUNDAY = 0;

export const calcSundays = (startDate: Date, endDate: Date) => {
  let count = 0;

  const currentDate = new Date(startDate.getTime());
  const lastDate = new Date(endDate.getTime());

  while (currentDate <= lastDate) {
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek === SUNDAY) {
      count++;
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return count;
};

export const isNotSunday = (date: Date) => {
  const day = date.getDay();
  return day !== SUNDAY;
};
