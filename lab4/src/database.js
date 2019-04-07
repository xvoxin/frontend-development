import  { ElectricScooter, ElecricVehicle, Hoverboard } from './vehicle'

export default class Database {

    constructor() {
        this._vehicles = []
    }

    addElectricScooter(name, range, price, hasApp, wheelSize) {
        let scooter = new ElectricScooter(name, range, price, hasApp, wheelSize)
        if (isVehicleExistsInBase(scooter)) {
            console.log("Vehicle ${name} already exists in base!")
            return
        }
        this._vehicles.push(scooter)
    }

    addVehicle(vehicle) {
        if (isVehicleExistsInBase(vehicle)) {
            console.log("Given vehicle already exists in base!")
            return
        }
        this._vehicles.push(vehicle)
    }

    removeVehicle(vehicle) {
        let vehicleIndex = this._vehicles.indexOf(vehicle)
        this._vehicle.splice(vehicleIndex, 1)
    }

    getVehicles() {
        return this._vehicles
    }

    isVehicleExistsInBase(vehicle) {
        this._vehicles.forEach(element => {
            if (element == vehicle) return true
        })
        return false
    }

}