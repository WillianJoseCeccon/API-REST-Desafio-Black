'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('custumers', [{
      name: 'Cliente 01',      
      phone: '1111-1111',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Cliente 02',      
      phone: '2222-2222',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Cliente 03',      
      phone: '3333-3333',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Cliente 04',      
      phone: '4444-4444',
      created_at: new Date(),
      updated_at: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('custumers', null, {})    
  }
};
