export class ElectricVehicle {

    constructor(name, range, price, hasApp) {
        this.name = name
        this.range = range
        this.price = price
        this.hasApp = hasApp
    }

}

export class ElectricScooter extends ElectricVehicle {

    constructor(name, range, price, hasApp, wheelSize) {
        super(name, range, price, hasApp)
        this.wheelSize = wheelSize
    }

}

export class Hoverboard extends ElectricVehicle {
    
    constructor(name, range, price, hasApp, hasBackpack) {
        super(name, range, price, hasApp)
        this.hasBackpack = hasBackpack
    }

}