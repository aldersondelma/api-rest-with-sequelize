const faker = require("faker");
const times = require("lodash.times");
const random = require("lodash.random");

const db = require('../models');


db.sequelize.sync().then(() => {
    // populate author table with dummy data
    db.author.bulkCreate(
      times(10, () => ({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName()
      }))
    );
    // populate post table with dummy data
    db.post.bulkCreate(
      times(10, () => ({
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        authorId: random(1, 10)
      }))
    )
});