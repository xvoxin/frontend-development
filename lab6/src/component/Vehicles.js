import React, { Component } from 'react'


export class Vehicles extends Component {

    render() {
        return (
            <div>
                <h2>Vehicles</h2>
                <ul>
                    {this.props.vehicles.map( vehicle => 
                        <li key={vehicle.toString()}>{vehicle.name}</li>
                    )}
                </ul>
            </div>
        )
    }
}