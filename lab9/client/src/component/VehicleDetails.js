import React, { Component } from 'react'

export class VehicleDetails extends Component {

    renderDetails() {
        if(this.props.vehicle) {
        var vehicle = this.props.vehicle
        return <div>
                <p>Name: {vehicle.name}</p>
                <p>Range: {vehicle.range}</p>
                <p>Price: {vehicle.price}</p>
                <p>Has app: {vehicle.hasApp.toString()}</p>
                <button onClick={this.props.onDeleteClicked}>Delete Vehicle</button>
            </div>
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