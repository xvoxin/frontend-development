import  { ElectricScooter, ElecricVehicle, Hoverboard } from './vehicle'

export class VehicleBase {

    constructor() {
        this._vehicles = [
            new ElectricScooter(
                "Xiaomi MiJia",
                30,
                1599.99,
                true,
                6
            ),
            new Hoverboard(
                "Boosted Board 2",
                23,
                6755.99,
                true,
                false
            ),
            new ElectricScooter(
                "Xiaomi MiJia Pro",
                45,
                2599.99,
                true,
                6
            ),
            new Hoverboard(
                "Koowheel",
                26,
                2575.99,
                false,
                false
            ),

        ]
    }

    isVehicleExistsInBase(vehicle) {
        this._vehicles.forEach(element => {
            if (element == vehicle) return true
        })
        return false
    }

    addElectricScooter(name, range, price, hasApp, wheelSize) {
        let scooter = new ElectricScooter(name, range, price, hasApp, wheelSize)
        if (this.isVehicleExistsInBase(scooter)) {
            console.log("Vehicle ${name} already exists in base!")
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
        this._vehicle.splice(vehicleIndex, 1)
    }

    getVehicles() {
        return this._vehicles
    }

}