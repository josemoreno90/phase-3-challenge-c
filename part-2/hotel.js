const database = require('./database')
const print = require('node-print')


const optionalInput = process.argv[3];


switch (process.argv[2]) {
  case 'guests':
    database.guests().then((res) => {
     print.pt(res)
   })
    break;

  case 'rooms':
    if (!optionalInput) {
      database.rooms().then(res => {
        print.pt(res)
      })
      .catch(error => console.log(error));
      break;
    } else if (optionalInput === '--available') {
      database.availableRooms().then(res => {
        print.pt(res)
      })
      .catch(error => console.log(error));
      break;
    } else {
      console.log('Please enter a command after hotel.');
      console.log('Commands are guests, rooms, rooms --available, bookings, and bookings followed by a room.');
      break;
    };

  case 'bookings':
    if (!optionalInput) {
      database.bookings().then(res => {
        print.pt(res)
      })
      .catch(err => console.log(err));
      break;
    } else {
      database.bookingsForRoom(optionalInput).then(res => {
        print.pt(res)
      })
      .catch(error => console.log(error));
      break;
    }

  default:
    console.log('Please enter a command after hotel.js');
    console.log('Commands are guests, rooms, rooms --available, bookings, and bookings followed by a room.');
};
