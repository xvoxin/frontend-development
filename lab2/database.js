var vehicletype = {
    SCOOTER: 1,
    HOVERBOARD: 2,
    LONGBOARD: 3,
    properties: {
      1: {name: "scooter", value: 1},
      2: {name: "hoverboard", value: 2},
      3: {name: "longboard", value: 3}
    }
  };

var vehicleBase = [
    {
        name: "Xiaomi MiJia",
        range: 30,
        type: vehicletype.SCOOTER,
        price: 1599.99,
        hasApp: true,
    },
    {
        name: "Manta Board",
        range: 12,
        type: vehicletype.HOVERBOARD,
        price: 699,
        hasApp: false,
    },
    {
        name: "Lamborghini",
        range: 21,
        type: vehicletype.HOVERBOARD,
        price: 2599.99,
        hasApp: true,
    },
    {
        name: "BoostedBoard 2",
        range: 34,
        type: vehicletype.LONGBOARD,
        price: 6799.99,
        hasApp: true,
    },
    {
        name: "Kawasaki",
        range: 19,
        type: vehicletype.HOVERBOARD,
        price: 1799.99,
        hasApp: false,
    },
    {
        name: "KooWheel Onyx",
        range: 36,
        type: vehicletype.LONGBOARD,
        price: 2299.99,
        hasApp: true,
    },
    {
        name: "Razor",
        range: 18,
        type: vehicletype.LONGBOARD,
        price: 1299.99,
        hasApp: false,
    },
    {
        name: "Joyor X5S",
        range: 55,
        type: vehicletype.SCOOTER,
        price: 5490,
        hasApp: true,
    }
]

var showAllVehicles = function() {
    vehicleBase.forEach(element => {
        console.log(element)
    });
}

var addVehicle = function(vehicle) {
    if (vehicleBase.includes(vehicle)) {
        console.log("Element already exists in collection!")
        return
    }
    vehicleBase.push(vehicle)
}

var updateVehicle = function(vehicle, newName) {
    vehicleBase.forEach(element => {
        if (element == vehicle) {
            element.name = newName
        }
    })
}

var removeVehicle = function(vehicle) {
    var vehicleIndex = vehicleBase.indexOf(vehicle)
    vehicleBase.splice(vehicleIndex, 1)
}

var testVehicle = {
    name: "Joyor X5S xdd xdxdxd",
    range: 55,
    type: vehicletype.SCOOTER,
    price: 5490,
    hasApp: true,
}

var updatedVehicle = {
    name: "Joyor X5D i poprawki",
    range: 55,
    type: vehicletype.SCOOTER,
    price: 5490,
    hasApp: true,
}

addVehicle(testVehicle)
showAllVehicles()
console.log("=================================")
updateVehicle(testVehicle, "Joyor X5D i poprawki")
showAllVehicles()
console.log("=================================")
removeVehicle(updatedVehicle)
showAllVehicles()
console.log("=================================")
