module.exports = function(sequelize, DataTypes) {
    var UserInventory = sequelize.define("Inventory", {
        userId: DataTypes.INTEGER,
        type: DataTypes.STRING,
        brandStyle: DataTypes.STRING,
        size: DataTypes.INTEGER,
        percentBottleRemaining: DataTypes.INTEGER,
        currentBottleValue: DataTypes.INTEGER,
        fullBottleCount: DataTypes.INTEGER,
        totalCost: DataTypes.INTEGER
        // createdAt: Date.now()
    })

    return UserInventory;
}