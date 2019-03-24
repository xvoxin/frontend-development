function ElectricVehicle(name, range, price, hasApp) {
    this.name = name
    this.range = range
    this.price = price
    this.hasApp = hasApp
}

ElectricVehicle.prototype = {
    getName: function () {
        return this.name
    },
    getRange: function () {
        return this.range
    },
    getPrice: function () {
        return this.price
    },
    getHasApp: function () {
        return this.hasApp
    }
}

// Scooter
function ElectricScooter(name, range, price, hasApp, wheelSize) {
    ElectricVehicle.call(name, range, price, hasApp)
    this.wheelSize = wheelSize
}

ElectricScooter.prototype = Object.create(ElectricVehicle.prototype)
ElectricScooter.prototype.constructor = ElectricScooter

// Hoverboard
function Hoverboard(name, range, price, hasApp, hasBackpack) {
    ElectricVehicle.call(name, range, price, hasApp)
    this.hasBackpack = hasBackpack
}

Hoverboard.prototype = Object.create(Hoverboard.prototype)
Hoverboard.prototype.constructor = Hoverboard

// Rozszerzenie

ElectricScooter.prototype.getWheelSize = function () {
    return this.wheelSize
}

Hoverboard.prototype.getHasBackpack = function () {
    return this.hasBackpack
}

// Test

var xiaomiScooter = new ElectricScooter(
    "Xiaomi",
    34,
    1799.99,
    true,
    6
)

var boostedBoard = new Hoverboard(
    "BoostedBoard 2",
    25,
    4899.99,
    true,
    true
)

console.log(xiaomiScooter.getWheelSize())
console.log(boostedBoard.getHasBackpack())

var vehicleBase = (function () {

    vehicles = []

    var isVehicleExistsInBase = function(vehicle) {
        vehicles.forEach(element => {
            if (element == vehicle) return true
        })
        return false
    }

    return {
        addElectricScooter: function(name, range, price, hasApp, wheelSize) {
            var scooter = new ElectricScooter(name, range, price, hasApp, wheelSize)
            if (isVehicleExistsInBase(scooter)) {
                console.log("Given vehicle already exists in base!")
                return
            }
            vehicles.push(scooter)
        },
        addVehicle: function (vehicle) {
            if (isVehicleExistsInBase(vehicle)) {
                console.log("Given vehicle already exists in base!")
                return
            }
            vehicles.push(vehicle)
        },
        removeVehicle: function(vehicle) {
            var vehicleIndex = vehicleBase.indexOf(vehicle)
            vehicleBase.splice(vehicleIndex, 1)
        },
        getVehicles() {
            return vehicles
        }
    }
})

var base = vehicleBase()

var xiaomi = base.addElectricScooter(
    "Xiaomi",
    "34",
    1799.99,
    true,
    6
)

console.log(base.getVehicles())