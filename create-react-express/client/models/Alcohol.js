module.exports = function(sequelize, DataTypes) {
    var AlcoholTable = sequelize.define("Alcohol Table", {
        type: DataTypes.STRING,
        brandStyle: DataTypes.STRING,
        emptyBottleWeight: DataTypes.INTEGER,
        gramsPerOunce: DataTypes.INTEGER
    })

    return AlcoholTable;
}