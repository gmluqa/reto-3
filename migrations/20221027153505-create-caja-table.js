'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('users', {
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
          model: 'Almacen',
          key: 'codigo'
        },
        onDelete: 'no action',
        onUpdate: 'no action'
      },
      onCreate: DataTypes.DATE,
      onUpdate: DataTypes.DATE
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
