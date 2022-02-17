export const DUMMY_TEXT =
  'Lorem ipsum dolor sit amet, consectetur rerum minus adipisicing elit. Dignissimos rerum minus voluptatum placeat ullam.';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

// export
const getDate = () => {
  const intOne = 2 * 86400000;
  const intTwo = 5 * 86400000;

  const timeOne = Date.now() + intOne;
  const timeTwo = new Date().getTime() + intTwo;

  const newOne = new Date(timeOne);
  const newTwo = new Date(timeTwo);

  const monthOne = months[newOne.getMonth()];
  const monthTwo = months[newTwo.getMonth()];

  const dateOne = newOne.getDate();
  const dateTwo = newTwo.getDate();

  const dayOne = days[newOne.getDay()];
  const dayTwo = days[newTwo.getDay()];

  const nearestDate = { date: dateOne, day: dayOne, month: monthOne };

  const farthestDate = { date: dateTwo, day: dayTwo, month: monthTwo };
  console.log(nearestDate, farthestDate);
};

getDate();
