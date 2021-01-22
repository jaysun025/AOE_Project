'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class civilTechUnit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  civilTechUnit.init({
    id: DataTypes.INTEGER,
    favCivilId: DataTypes.INTEGER,
    favTechId: DataTypes.INTEGER,
    favUnitId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'civilTechUnit',
  });
  return civilTechUnit;
};