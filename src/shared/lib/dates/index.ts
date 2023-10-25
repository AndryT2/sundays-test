export const calcSundays = (startDate: Date, endDate: Date) => {
  let count = 0;

  const currentDate = new Date(startDate.getTime());
  const lastDate = new Date(endDate.getTime());

  while (currentDate <= lastDate) {
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek === 6) {
      count++;
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return count;
};

export const isNotSunday = (date: Date) => {
  const day = date.getDay();
  return day !== 6;
};
