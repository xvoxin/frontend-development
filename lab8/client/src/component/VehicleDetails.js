import React, { Component } from 'react'

export class VehicleDetails extends Component {

    getDetails(vehicle) {
        return `${vehicle.name}, Range: ${vehicle.range}, Price: ${vehicle.price}, Has app: ${vehicle.hasApp}`
    }

    renderDetails() {
        if(this.props.vehicle) {
            console.log(this.props.vehicle.name)
            var vehicle = this.props.vehicle
            return <p>{this.getDetails(vehicle)}</p>
        }
    }

    render() {
        return (
            <div>
                <h2>VehicleDetails</h2>
                <div>{this.renderDetails()}</div>
            </div>
        )
    }
}