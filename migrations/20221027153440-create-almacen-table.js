'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('almacen', {
      codigo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      lugar: Sequelize.STRING,
      capacidad: Sequelize.INTEGER,
    });
  },


  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
}