DROP DATABASE IF EXISTS hotel_db;
CREATE DATABASE hotel_db;

\c hotel_db;

CREATE TABLE guests(
  id SERIAL PRIMARY KEY,
  name VARCHAR(250),
  email VARCHAR(250)
);

CREATE TABLE rooms(
  id SERIAL PRIMARY KEY,
  room_number VARCHAR(250),
  capacity INTEGER,
  available BOOLEAN DEFAULT true
);

CREATE TABLE bookings(
  id SERIAL PRIMARY KEY,
  room_id INTEGER REFERENCES rooms (id),
  guest_id INTEGER REFERENCES guests (id),
  check_in DATE,
  check_out DATE
);
