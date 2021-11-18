'use strict';
const array = require("../../src/price_list.js")
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  for (let i = 0; i < array.length; i++) {
    await queryInterface.bulkInsert('SERVICEs', [{
      name: array[i][0],
      price: array[i][1],
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
