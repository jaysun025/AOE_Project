'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  favList.init({
    id: DataTypes.INTEGER,
    favCivilId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'favList',
  });
  return favList;
};