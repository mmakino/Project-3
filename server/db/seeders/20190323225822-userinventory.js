'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("UserInventory", [
      { 
        type: "SCOTCH WHISKY", 
        brandStyle: "GLENLIVET/18yr",
        costPerBottle: 65.00, 
        sizeML: 750, 
        sizeOZ: 25.36 , 
        percentBottleRemaining: .35, 
        currentValueOfBottle: 15.75,
        totalFullBottles: 5,
        totalInventoryValue: 65.00
      },
      { 
        type: "JAPANESE WHISKY", 
        brandStyle: "CHICHIBU/ICHIRO'S MALT AND GRAIN/700",
        costPerBottle: 70.00, 
        sizeML: 1000, 
        sizeOZ: 33.81 , 
        percentBottleRemaining: .35, 
        currentValueOfBottle: 18.50,
        totalFullBottles: 9,
        totalInventoryValue: 90.00
      },
              
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("UserInventory", null, {});
  }
};

