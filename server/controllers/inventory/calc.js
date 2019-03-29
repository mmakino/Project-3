const db = require("../../db/models");

const calc = {
    remainingInBottle: function(measuredWeight, emptyBottleWeight, gramsPerOunce) {
        return ((measuredWeight - emptyBottleWeight) / gramsPerOunce);
    },
    percentageLeft: function(remainingInBottle, bottleSize) {
        return (remainingInBottle / bottleSize)
    },
    pricePerOunce: function(costPerBottle, bottleSize) {
        return (costPerBottle / bottleSize)
    },
    valueOfBottle: function(pricePerOunce, remainingInBottle) {
        return (pricePerOunce * remainingInBottle)
    },
    totalInventory: function(valueOfBottle, costPerBottle, numOfBottles) {
        return (valueOfBottle + costPerBottle * numOfBottles)
    }
}

    function alcohol(brandStyle, bottleSize) {
        db.alcohol.findOne({
            where: {
                brandStyle: brandStyle,
                sizeML: bottleSize
            }
        }).then(res => {
            return res;
        }).catch(err => {
            console.log(err);
        }) 
    }
    
    function userInputs(data) {

        const alcoholInfo = alcohol(brandStyle, bottleSize);
        alcoholInfo.type = data.type;
        alcoholInfo.brandStyle = data.brandStyle;
        alcoholInfo.sizeML = data.bottleSize;
        alcoholInfo.sizeOZ = 

        const userInventory = {};

        userInventory.type = data.type;
        userInventory.brandStyle = data.brandStyle;
        userInventory.bottleSize = data.bottleSize;
        userInventory.
    }
