'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Listfilm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Listfilm.init({
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    src: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Listfilm',
  });
  return Listfilm;
};