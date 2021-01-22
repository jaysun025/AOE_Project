'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favCivil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  favCivil.init({
    id: DataTypes.INTEGER,
    civilId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'favCivil',
  });
  return favCivil;
};