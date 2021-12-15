'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Accounts', {
            id: {
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            number: {
                type: Sequelize.STRING
            },
            balanse: {
                type: Sequelize.FLOAT,
                allowNull: false,
                default: 0,
            },
            currency: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            color: {
                allowNull: false,
                type: Sequelize.STRING,
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
                type: Sequelize.INTEGER
            }
        });
    },
    down: async(queryInterface) => {
        await queryInterface.dropTable('Accounts');
    }
};