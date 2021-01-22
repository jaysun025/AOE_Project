'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favUnit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  favUnit.init({
    id: DataTypes.INTEGER,
    unitId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'favUnit',
  });
  return favUnit;
};