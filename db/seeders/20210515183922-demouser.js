'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash('111111', salt);

    await queryInterface.bulkInsert('Users', [
      {
        password,
        email: 'demo@financelead.com',
        full_name: 'Demo User',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        password,
        email: 'demo2@financelead.com',
        full_name: 'Demo User2',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]); //, { returning: true });
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
