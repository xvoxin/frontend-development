export class ElectricVehicle {

    constructor(name, range, price, hasApp) {
        this._name = name
        this._range = range
        this._price = price
        this._hasApp = hasApp
    }

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value
    }

    get range() {
        return this._range
    }

    set range(value) {
        this._range = value
    }

    get price() {
        return this.price
    }

    set price(value) {
        this._price = value
    }

    get hasApp() {
        return this._hasApp
    }

    set hasApp(value) {
        this._hasApp = value
    }

    getDetails() {
        return `${this._name}, Range: ${this._range}, Price: ${this._price}, Has app: ${this._hasApp}`
    }

}

export class ElectricScooter extends ElectricVehicle {

    constructor(name, range, price, hasApp, wheelSize) {
        super(name, range, price, hasApp)
        this._wheelSize = wheelSize
    }

    get wheelSize() {
        return this._wheelSize
    }

    set wheelSize(value) {
        this._wheelSize = value
    }

}

export class Hoverboard extends ElectricVehicle {
    
    constructor(name, range, price, hasApp, hasBackpack) {
        super(name, range, price, hasApp)
        this._hasBackpack = hasBackpack
    }

    get hasBackpack() {
        return this._hasBackpack
    }

    set hasBackpack(value) {
        this._hasBackpack = value
    }
}