import  { ElectricScooter, ElecricVehicle, Hoverboard } from './vehicle'

export class Database {

    constructor() {
        this._vehicles = []
    }

    isVehicleExistsInBase(vehicle) {
        var result = false
        this._vehicles.forEach(element => {
            if (element === vehicle) 
                result = true
        })
        return result
    }

    addElectricScooter(name, range, price, hasApp, wheelSize) {
        let scooter = new ElectricScooter(name, range, price, hasApp, wheelSize)
        if (this.isVehicleExistsInBase(scooter)) {
            console.log(`Vehicle ${name} already exists in base!`)
            return
        }
        this._vehicles.push(scooter)
    }

    addVehicle(vehicle) {
        if (this.isVehicleExistsInBase(vehicle)) {
            console.log("Given vehicle already exists in base!")
            return
        }
        this._vehicles.push(vehicle)
    }

    removeVehicle(vehicle) {
        let vehicleIndex = this._vehicles.indexOf(vehicle)
        this._vehicles.splice(vehicleIndex, 1)
    }

    getVehicles() {
        return this._vehicles
    }

}