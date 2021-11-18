'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ZAKAZ_SERVICEs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      zakaz_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "ZAKAZs",
          key:"id"       
          }

      },
      service_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "SERVICEs",
          key:"id"       
          }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ZAKAZ_SERVICEs');
  }
};
