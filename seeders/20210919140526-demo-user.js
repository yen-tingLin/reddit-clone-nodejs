"use strict";

const faker = require("faker");

const roles = ["admin", "member", "guest"];
const user_count = 5;
const random_role = () => roles[getRandomInt(0, roles.length)];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      Array.from({ length: user_count }).map((d) => ({
        name: faker.name.findName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        role: random_role(),
        create_date: faker.datatype.datetime(),
        is_activated: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {}
    );

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {
      "options.trucate": true,
    });
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
