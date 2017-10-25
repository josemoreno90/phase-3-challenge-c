process.env.NODE_ENV = 'test';
const expect = require('chai').expect;
const database = require('../database');

describe('function guests', function () {
  it('Should return all guests from the guests table', function () {
    return database.guests()
    .then(res => {
      expect(res.length).to.eql(20);
    });
  });

  it('Should return Aurthur Velti as the first guest', function () {
    return database.guests()
    .then(res => {
      expect(res[0].name).to.eql('Aurthur Velti');
    });
  });

  it('Should return Penelope Searchfield as the last guest', function () {
    return database.guests()
    .then(res => {
      expect(res[19].name).to.eql('Penelope Searchfield');
    });
  });
});

describe('function rooms', function () {
  it('Should return all room numbers, their capacity, and their availability from the rooms table', function () {
    return database.rooms()
    .then(res => {
      expect(res.length).to.eql(18);
    });
  });

  it('Should return room 2A as the first room', function () {
    return database.rooms()
    .then(res => {
      expect(res[0].room_number).to.eql('2A');
    });
  });

  it('Should return room 5A as the last room', function () {
    return database.rooms()
    .then(res => {
      expect(res[17].room_number).to.eql('5A');
    });
  });

  it('Should return a room even if it is not available', function () {
    return database.rooms()
    .then(res => {
      expect(res[17].available).to.eql(false);
    });
  });
});

describe('function availableRooms', function () {
  it('Should return all room numbers and their capacity if they are available', function () {
    return database.availableRooms()
    .then(res => {
      expect(res.length).to.eql(16);
    });
  });

  it('Should only return rooms if they available', function () {
    return database.availableRooms()
    .then(res => {
      expect(res[0].available).to.eql(true);
    });
  });

  it('Should only return rooms if they available', function () {
    return database.availableRooms()
    .then(res => {
      expect(res[3].available).to.eql(true);
    });
  });

  it('Should only return rooms if they available', function () {
    return database.availableRooms()
    .then(res => {
      expect(res[15].available).to.eql(true);
    });
  });
});

describe('function bookings', function () {
  it('Should return all rooms currently booked from the bookings table', function () {
    return database.bookings()
    .then(res => {
      expect(res.length).to.eql(34);
    });
  });

  it('Should only return rooms after the current date', function () {
    return database.bookings()
    .then(res => {
      expect(res[0].check_out).to.be.above(new Date());
    });
  });

  it('Should only return rooms after the current date', function () {
    return database.bookings()
    .then(res => {
      expect(res[2].check_out).to.be.above(new Date());
    });
  });

  it('Should only return rooms after the current date', function () {
    return database.bookings()
    .then(res => {
      expect(res[30].check_out).to.be.above(new Date());
    });
  });

  it('Should only return rooms after the current date', function () {
    return database.bookings()
    .then(res => {
      expect(res[23].check_out).to.be.above(new Date());
    });
  });

  it('Should only return rooms after the current date', function () {
    return database.bookings()
    .then(res => {
      console.log(res[0].check_out)
      expect(res[0].check_out).to.be.above(new Date());
    });
  });
});

describe('function bookingsForRoom', function () {
  it('Should return all bookings for 3B', function () {
    return database.bookingsForRoom('3B')
    .then(res => {
      expect(res.length).to.eql(3);
    });
  });

  it('Should return all bookings for 3B', function () {
    return database.bookingsForRoom('3B')
    .then(res => {
      res.forEach(index => expect(index.room_number).to.eql('3B'));
    });
  });

  it('Should return all bookings for 4A', function () {
    return database.bookingsForRoom('4A')
    .then(res => {
      res.forEach(index => expect(index.room_number).to.eql('4A'));
    });
  });

  it('Should return all bookings for 3E', function () {
    return database.bookingsForRoom('3E')
    .then(res => {
      res.forEach(index => expect(index.room_number).to.eql('3E'));
    });
  });

  it('Should return all bookings for 5B', function () {
    return database.bookingsForRoom('5B')
    .then(res => {
      res.forEach(index => expect(index.room_number).to.eql('5B'));
    });
  });

  it('Should return all bookings for 2A', function () {
    return database.bookingsForRoom('2A')
    .then(res => {
      res.forEach(index => expect(index.room_number).to.eql('2A'));
    });
  });

  it('Should return all bookings for 2A', function () {
    return database.bookingsForRoom('2A')
    .then(res => {
      expect(res.length).to.eql(2);
    });
  });
});
