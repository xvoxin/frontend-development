import  { ElectricScooter, ElecricVehicle, Hoverboard } from './vehicle'

const TYPE_HOVERBOARD = "hoverboard"
const TYPE_SCOOTER = "scooter"

export class VehicleFactory {

    createVehicle(request) {
        var vehicle
        switch (request.body.type) {
            case TYPE_HOVERBOARD:
                vehicle = this.createHoverboard(
                    request.body.name,
                    request.body.range,
                    request.body.price,
                    request.body.hasApp,
                    request.body.hasBackpack,
                )
                break
            case TYPE_SCOOTER:
                vehicle = this.createElectricScooter(
                    request.body.name,
                    request.body.range,
                    request.body.price,
                    request.body.hasApp,
                    request.body.wheelSize,
                )
                break
            default:
            vehicle = this.createElectricVehicle(
                request.body.name,
                request.body.range,
                request.body.price,
                request.body.hasApp
                )
                break
        }

        return vehicle
    }

    createHoverboard(name, range, price, hasApp, hasBackpack) {
        return new Hoverboard(
            name,
            range,
            price,
            hasApp,
            hasBackpack
        )
    }
    
    createElectricScooter(name, range, price, hasApp, wheelSize) {
        return new ElectricScooter(
            name,
            range,
            price,
            hasApp,
            wheelSize
        )
    }
    
    createElectricVehicle(name, range, price, hasApp) {
        return new ElectricScooter(
            name,
            range,
            price,
            hasApp
        )
    }

}