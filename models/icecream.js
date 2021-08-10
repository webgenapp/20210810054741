'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Icecream extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Icecream.init(
    {
      flavour: DataTypes.STRING,
      quantity: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Icecream',
    }
  )
  return Icecream
}
