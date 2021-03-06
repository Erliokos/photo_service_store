'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ZAKAZ extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({USER,SERVICE}) {
      // define association here
      this.belongsTo(USER,{foreignKey: 'user_id'})

      this.belongsToMany(SERVICE,{through:'ZAKAZ_SERVICE', foreignKey: 'zakaz_id'})

    }
  };
  ZAKAZ.init({
    user_id: DataTypes.STRING,
    total_price: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ZAKAZ',
  });
  return ZAKAZ;
};
