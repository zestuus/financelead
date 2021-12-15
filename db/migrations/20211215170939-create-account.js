'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Accounts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            number: {
                allowNull: false,
                type: Sequelize.STRING
            },
            balanse: {
                type: Sequelize.FLOAT
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            userID: {
                type: Sequelize.INTEGER,
                primaryKey: true,
            }
        });
    },
    down: async(queryInterface) => {
        await queryInterface.dropTable('Accounts');
    }
};