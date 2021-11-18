'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SERVICE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ZAKAZ}) {
      // define association here
      this.ZAKAZ.belongsToMany(ZAKAZ,{through:'ZAKAZ - SERVICE', foreignKey: 'service_id'})
    }
  };
  SERVICE.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SERVICE',
  });
  return SERVICE;
};
