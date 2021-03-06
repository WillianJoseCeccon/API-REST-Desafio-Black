'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('restaurants', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: Sequelize.STRING,
      phone: Sequelize.STRING,
      address: Sequelize.STRING,
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false

      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('restaurants')
  }
};
