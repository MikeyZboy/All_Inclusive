// need to install Faker before seeding with fake data...
const faker = require('faker')
const connection = require('./connection')
const { Types } = require('mongoose')
const { User, Trip, Review } = require('./schema')
// above should also fake data for places and activities?

const users = new Array(50).fill().map(() => ({
  _id: Types.ObjectId(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email: faker.internet.email(),
  password_digest: faker.random.word() 
}))

const reviews = new Array(500).fill().map(() => ({
  _id: Types.ObjectId(),
  title: faker.random.words(),
  comment: faker.lorem.sentences(),
  popularity_rating: faker.random.number(),
  user_id: users[Math.floor(Math.random() * users.length)]._id
  // should this also include places+activities?
}))

const trips = new Array(100).fill().map(() => ({
  _id: Types.ObjectId(),
  name: faker.random.words(),
  // trip_start: faker.random.date(),
  // trip_end: faker.random.date(),
  image_url: faker.random.image(),
  popularity_rating: faker.random.number(),
  description: faker.lorem.paragraph(),
  place: faker.address.city(),
  reviews: reviews
    .slice(
      Math.floor(Math.random() * reviews.length),
      Math.floor(Math.random() * reviews.length)
    )
    .map((r) => r._id),
  user_id: users[Math.floor(Math.random() * users.length)]._id
}))

const seed = async () => {
  await connection.connect
  await User.insertMany(users)
  await Review.insertMany(reviews)
  await Trip.insertMany(trips)
  await connection.disconnect
  process.exit()
}

seed()