import moment from 'moment';

// Function to get the next 7 days in the specified format
export const getNext7Days = () => {
  const daysList = [];

  for (let i = 0; i < 7; i++) {
    const currentDate = moment().add(i, 'days');
    daysList.push({
      day: currentDate.format('ddd').toUpperCase(), // e.g., 'Fri'
      date: parseInt(currentDate.format('D')), // e.g., 6
      month: currentDate.format('MMM').toUpperCase(), // e.g., 'SEP'
    });
  }

  return daysList;
};
