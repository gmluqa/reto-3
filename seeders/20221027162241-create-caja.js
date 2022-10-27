'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('caja', [
      { 
        numReferencia: 1,
        contenido: "papas",
        valor: 707,
        almacen: 1,
        onCreate:" 2022-10-27"
      },
      { 
        numReferencia: 2,
        contenido: "eoeoes",
        valor: 400,
        almacen: 2,
        onCreate:" 2022-10-27"
      },
      { 
        numReferencia: 3,
        contenido: "zanahorias",
        valor: 500,
        almacen: 3,
        onCreate:" 2022-10-27"
      },
      { 
        numReferencia: 4,
        contenido: "zapatos",
        valor: 599,
        almacen: 4,
        onCreate:" 2022-10-27"
      },
      { 
        numReferencia: 5,
        contenido: "tomates",
        valor: 507,
        almacen: 5,
        onCreate:" 2022-10-27"
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