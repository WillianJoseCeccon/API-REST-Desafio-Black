'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('restaurants', [{
      name: 'restaurante A',
      description: 'Restaurante rodizio de massas.',
      phone: '1111-1111',
      address: 'Rua do restaurante A',
      created_at: new Date(),
      updated_at: new Date()      
    },
    {
      name: 'restaurante B',
      description: 'Restaurante rodizio de Carnes.',
      phone: '2222-2222',
      address: 'Rua do restaurante B',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'restaurante C',
      description: 'Restaurante rodizio de Frutos do Mar.',
      phone: '3333-3333',
      address: 'Rua do restaurante C',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'restaurante D',
      description: 'Restaurante Veg.',
      phone: '4444-4444',
      address: 'Rua do restaurante D',
      created_at: new Date(),
      updated_at: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('restaurants', null, {})
  }
};
