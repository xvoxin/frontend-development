import React, { Component } from 'react'


export class VehicleList extends Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.vehicles.map( vehicle => 
                        <li key={vehicle.name} onClick={() => this.props.onClick(this.props.vehicles.indexOf(vehicle))}>{vehicle.name}</li>
                    )}
                </ul>
            </div>
        )
    }
}