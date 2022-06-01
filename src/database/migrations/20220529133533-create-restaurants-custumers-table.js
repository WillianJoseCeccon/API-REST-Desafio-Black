'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('restaurants_custumers', {
      restaurant_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'restaurants',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      custumer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'custumers',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      stars: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      comentes: {
        type: Sequelize.STRING,
        allowNull: false
      },
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
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
