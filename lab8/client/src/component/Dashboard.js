import React, { Component } from 'react';
import { ElectricVehicle } from '../model/Vehicle';
import { VehicleServce } from '../services/vehicleService'
import { VehicleList } from '../component/VehicleList'
import { VehicleDetails } from '../component/VehicleDetails'

export class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.title = props.title

        this.vehicleService = new VehicleServce()

        this.state = {
            vehicles: [],
            activeVehicle: 0,
            vehicleName: "",
            vehicleRange: 0,
            vehiclePrice: 0,
            vehicleHasApp: false
        }
    }

    componentDidMount() {
        this.getVehicles()
    }

    async getVehicles() {
        var vehicles = await this.vehicleService.getVehicles()
        this.setState({vehicles: vehicles})
    }

    onVehicleClicked = clickedVehicle => {
        this.setState({activeVehicle: clickedVehicle})
    }

    onSubmitClicked = async event => {
        event.preventDefault()
        var vehicle = new ElectricVehicle(
            this.state.vehicleName,
            this.state.vehicleRange,
            this.state.vehiclePrice,
            this.state.vehicleHasApp
        )
        await this.vehicleService.addVehicle(vehicle)
        this.getVehicles()
    }

    render() {
        return(
            <div>
                <h2>Vehicle Base</h2><br/>
                <VehicleList vehicles={this.state.vehicles} onClick={this.onVehicleClicked} />
                <VehicleDetails vehicle={this.state.vehicles[this.state.activeVehicle]} />
                <div>
                    <form onSubmit={this.onSubmitClicked}>
                        <label>Name</label><br/>
                        <input value={this.state.vehicleName} onChange={event => this.setState({vehicleName: event.target.value})}></input><br/>
                        <label>Range</label><br/>
                        <input value={this.state.vehicleRange} onChange={event => this.setState({vehicleRange: event.target.value})}></input><br/>
                        <label>Price</label><br/>
                        <input value={this.state.vehiclePrice} onChange={event => this.setState({vehiclePrice: event.target.value})}></input><br/>
                        <label>Has app</label><br/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }

}