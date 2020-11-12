// need to install Faker before seeding with fake data...
const faker = require('faker')
const connection = require('./connection')
const { Types } = require('mongoose')
const { User, Trip, Review, Activity, Hotel, Place } = require('./schema')
// const Activities = require('./models/Activities')
// above should also fake data for places and activities?

const users = new Array(10).fill().map(() => ({
  _id: Types.ObjectId(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email: faker.internet.email(),
  password_digest: faker.random.word() 
}))

const reviews = new Array(10).fill().map(() => ({
  _id: Types.ObjectId(),
  title: faker.random.words(),
  comment: faker.lorem.sentences(),
  popularity_rating: faker.random.number(),
  user_id: users[Math.floor(Math.random() * users.length)]._id
  // should this also include places+activities?
}))


const hotels = new Array(10).fill().map(() => ({
  _id: Types.ObjectId(),
  name: faker.random.words(),
  image_url: faker.random.image(),
  popularity_rating: faker.random.number(),
  description: faker.lorem.paragraph(),
  place: faker.address.city(),
  reviews: reviews.slice(
    Math.floor(Math.random() * reviews.length),
    Math.floor(Math.random() * reviews.length)
    )
    .map((r) => r._id),
  user_id: users[Math.floor(Math.random() * users.length)]._id
}))

const activities = new Array(10).fill().map(() => ({
  _id: Types.ObjectId(),
  name: faker.random.words(),
  description: faker.lorem.paragraph(),
  popularity_rating: faker.random.number(),
  hotel: Types.ObjectId(),
  friends: users.slice(
    Math.floor(Math.random() * users.length),
    Math.floor(Math.random() * users.length)
    )
    .map((u) => u._id),
  reviews: reviews.slice(
    Math.floor(Math.random() * reviews.length),
    Math.floor(Math.random() * reviews.length)
    )
    .map((r) => r._id),
  user_id: users[Math.floor(Math.random() * users.length)]._id
}))
      
const trips = new Array(10).fill().map(() => ({
  _id: Types.ObjectId(),
  name: faker.random.words(),
  trip_start: faker.date.past(),
  trip_end: faker.date.past(),
  city: faker.address.city(),
  activities: activities.slice(
    Math.floor(Math.random() * activities.length),
    Math.floor(Math.random() * activities.length)
    )
    .map((a) => a._id),
  hotel_id: hotels[Math.floor(Math.random() * hotels.length)]._id,
  friends: users.slice(
    Math.floor(Math.random() * users.length),
    Math.floor(Math.random() * users.length)
    )
    .map((u) => u._id),
  reviews: reviews.slice(
    Math.floor(Math.random() * reviews.length),
    Math.floor(Math.random() * reviews.length)
    )
    .map((r) => r._id),
  user_id: users[Math.floor(Math.random() * users.length)]._id
}))

const places = new Array(10).fill().map(() => ({
  _id: Types.ObjectId(),
  name: faker.random.words(),
  description: faker.lorem.paragraph(),
  image_url: faker.random.image(),
  hotels: hotels.slice(
    Math.floor(Math.random() * hotels.length),
    Math.floor(Math.random() * hotels.length)
    )
    .map((h) => h._id),
  friends: users.slice(
    Math.floor(Math.random() * users.length),
    Math.floor(Math.random() * users.length)
    )
    .map((u) => u._id),
  reviews: reviews.slice(
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
  await Hotel.insertMany(hotels)
  await Activity.insertMany(activities)
  await Trip.insertMany(trips)
  await Place.insertMany(places)
  await connection.disconnect
  process.exit()
}

seed()