const promise = require('bluebird')
const options = { promiseLib: promise }
const pgp = require('pg-promise')(options)
const connectionString = 'postgres://localhost:5432/hotel_db'
const db = pgp(connectionString)

module.exports = {
  guests: () => {
    return db.manyOrNone('SELECT * FROM guests')
  },
  rooms: () => {
    return db.manyOrNone('SELECT room_number, capacity, available FROM rooms')
  },
  availableRooms: () => {
    return db.manyOrNone('SELECT room_number, capacity, available FROM rooms WHERE available = true')
  },
  bookings: () => {
    return db.manyOrNone('SELECT room_number, name, check_in, check_out FROM bookings\
                          JOIN rooms ON rooms.id = bookings.room_id\
                          JOIN guests ON guests.id = bookings.guest_id\
                          WHERE check_out > CURRENT_DATE\
                          ORDER BY bookings.check_out')

  },
  bookingsForRoom: (roomNumber) => {
    return db.manyOrNone(`SELECT room_number, name, check_in, check_out FROM bookings
                        JOIN rooms ON rooms.id = bookings.room_id
                        JOIN guests ON guests.id = bookings.guest_id
                        WHERE check_out > CURRENT_DATE
                        AND room_number = $1`, [roomNumber])
  }
}
