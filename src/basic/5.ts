enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: string): boolean => {
  return day === DayOfWeek.Saturday || DayOfWeek.Sunday;
};
