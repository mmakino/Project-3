'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserInventory = sequelize.define('UserInventory', {
    userId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    brandStyle: DataTypes.STRING,
    costPerBottle: DataTypes.DECIMAL(10,2),
    sizeML: DataTypes.DECIMAL(10,2),
    sizeOZ: DataTypes.DECIMAL(10,2),
    percentBottleRemaining: DataTypes.DECIMAL(10,2),
    currentValueOfBottle: DataTypes.DECIMAL(10,2),
    totalFullBottles: DataTypes.INTEGER,
    totalInventoryValue: DataTypes.DECIMAL(10,2),
    createdAt: DataTypes.DATE
  }, {});
  UserInventory.associate = function(models) {
    // associations can be defined here
  };
  return UserInventory;
};