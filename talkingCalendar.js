const talkingCalendar = function (date) {

  let yyyymmdd = date.split('/');
  let year = yyyymmdd[0];
  let day = yyyymmdd[2];
  let month = yyyymmdd[1];

  let suffix = '';
  if (day === '01')
    suffix = 'st';
  else if (day === '02')
    suffix = 'nd';
  else if (day === '02')
    suffix = 'rd';
  else
    suffix = 'th';

  //removing extra 0 from 01 to 09.
  if (day[0] === '0') {
    day = day[1];
  }

  switch (month) {
    case '01':
      return 'January ' + day + suffix + ', ' + year;
      break;
    case '02':
      return 'February ' + day + suffix + ', ' + year;
      break;
    case '03':
      return 'March ' + day + suffix + ', ' + year;
      break;
    case '04':
      return 'April ' + day + suffix + ', ' + year;
      break;
    case '05':
      return 'May ' + day + suffix + ', ' + year;
      break;
    case '06':
      return 'June ' + day + suffix + ', ' + year;
      break;
    case '07':
      return 'July ' + day + suffix + ', ' + year;
      break;
    case '08':
      return 'August ' + day + suffix + ', ' + year;
      break;
    case '09':
      return 'September ' + day + suffix + ', ' + year;
      break;
    case '10':
      return 'October ' + day + suffix + ', ' + year;
      break;
    case '11':
      return 'November ' + day + suffix + ', ' + year;
      break;
    case '12':
      return 'December ' + day + suffix + ', ' + year;
      break;
    default:
      return 'bad imput';
  }
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));