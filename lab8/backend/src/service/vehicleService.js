import  { ElectricScooter, ElecricVehicle, Hoverboard } from '../domain/vehicle'

export class VehicleService {

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

    addVehicle(vehicle) {
        if (this.isVehicleExistsInBase(vehicle)) {
            console.log("Given vehicle already exists in base!")
            return false
        }
        this._vehicles.push(vehicle)
        return true
    }

    removeVehicle(name) {
        var vehicleIndex = this._vehicles.findIndex(element => element.name === name)
        if (vehicleIndex === -1) 
            return false
        
        this._vehicles.splice(vehicleIndex, 1)
        return true
    }

    updateVehicle(vehicle, vehicleName) {
        var vehicleIndex = this._vehicles.findIndex(element => element.name === vehicleName)
        if (vehicleIndex === -1)
            return false
        
        this._vehicles[vehicleIndex] = vehicle
        return true
    }

    getVehicles() {
        return this._vehicles
    }

}