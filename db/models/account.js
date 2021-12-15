'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Account extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */

    }
    Account.init({
        name: DataTypes.STRING,
        number: DataTypes.STRING,
        balanse: DataTypes.FLOAT,
    }, {
        sequelize,
        modelName: 'Account',
    });
    return Account;
};