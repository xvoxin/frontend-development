import React, { Component } from 'react';
import { VehicleBase } from '../domain/database';
import { Vehicles } from './Vehicles.js'
import { VehicleDetails } from './VehicleDetails';


export class MainComponent extends Component {

    constructor(props) {
        super(props)
        
        this.vehicleBase = new VehicleBase()
        this.state = {
            vehicles: this.vehicleBase.getVehicles(),
            activeVehicle: 0
        }
        
    }

    tick() {
        this.setState({
            activeVehicle: (this.state.activeVehicle + 1) % this.state.vehicles.length
        })
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div> 
                <Vehicles vehicles={this.state.vehicles}/> 
                <VehicleDetails vehicle={this.state.vehicles[this.state.activeVehicle]}/>
            </div>
        )

    }

}