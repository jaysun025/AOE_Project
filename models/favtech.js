'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favTech extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  favTech.init({
    id: DataTypes.INTEGER,
    techId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'favTech',
  });
  return favTech;
};