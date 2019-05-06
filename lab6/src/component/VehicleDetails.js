import React, { Component } from 'react'


export class VehicleDetails extends Component {

    render() {
        return (
            <div>
                <h2>VehicleDetails</h2>
                <ul>{this.props.vehicle.getDetails()}</ul>
            </div>
        )
    }
}