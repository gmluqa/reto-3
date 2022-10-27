'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('almacen', [
      { 
        codigo: 1,
        lugar: "Madrid",
        capacidad: 5090

      },
      { 
        codigo: 2,
        lugar: "valencia",
        capacidad: 500

      },
      { 
        codigo: 3,
        lugar: "Mavalri",
        capacidad: 600

      },
      { 
        codigo: 4,
        lugar: "barcelona",
        capacidad: 8000

      },
      { 
        codigo: 5,
        lugar: "Marsella",
        capacidad: 5700

      },

    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};