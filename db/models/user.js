'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class USER extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ZAKAZ}) {
      // define association here
      this.hasMany(ZAKAZ,{foreignKey: 'user_id'})
    }
  };
  USER.init({
    name:DataTypes.STRING,
    email: DataTypes.STRING,
    pass: DataTypes.STRING,
    phone: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'USER',
  });
  return USER;
};
