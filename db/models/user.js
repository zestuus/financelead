'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        // todo: add relations here
        static associate(models) {
            User.hasMany(models.Account);
        }
    }
    User.init({
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        mfa: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};