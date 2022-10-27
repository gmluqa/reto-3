'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('caja', {
      numReferencia: {
        type: Sequelize.STRING(5),
        primaryKey: true,
        allowNull: false
      },
      contenido: Sequelize.STRING,
      valor: Sequelize.INTEGER,

      almacen: {
        type: Sequelize.INTEGER,
        references: {
          model: 'almacen',
          key: 'codigo'
        },
        onDelete: 'no action',
        onUpdate: 'no action'
      },
      onCreate: Sequelize.DATE,
      onUpdate: Sequelize.DATE
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
