import React, { Component } from 'react';
import { ElectricVehicle } from '../model/Vehicle';
import { VehicleServce } from '../services/VehicleService'
import { VehicleList } from '../component/VehicleList'
import { VehicleDetails } from '../component/VehicleDetails'

export class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.title = props.title

        this.vehicleService = new VehicleServce()

        this.state = {
            vehicles: [],
            activeVehicle: -1,
            vehicleName: "",
            vehicleRange: "",
            vehiclePrice: "",
            vehicleHasApp: false
        }
    }

    setDefaultState() {
        this.setState({
            vehicleName: "",
            vehicleRange: "",
            vehiclePrice: "",
            vehicleHasApp: ""
        })
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
        this.setDefaultState()
        this.getVehicles()
    }

    onDeleteVehicleClicked = async () => {
        var vehicleName = this.state.vehicles[this.state.activeVehicle].name
        await this.vehicleService.deleteVehicle(vehicleName)
        this.setState({activeVehicle: -1})
        this.getVehicles()
    }

    render() {
        return(
            <div>
                <h2>Vehicle Base</h2>
                <VehicleList vehicles={this.state.vehicles} onClick={this.onVehicleClicked} />
                <VehicleDetails vehicle={this.state.vehicles[this.state.activeVehicle]} onDeleteClicked={this.onDeleteVehicleClicked}/>
                <div>
                    <h2>Create Vehicle:</h2>
                    <form onSubmit={this.onSubmitClicked}>
                        <label>Name</label><br/>
                        <input value={this.state.vehicleName} onChange={event => this.setState({vehicleName: event.target.value})}></input><br/>
                        <label>Range</label><br/>
                        <input value={this.state.vehicleRange} onChange={event => this.setState({vehicleRange: event.target.value})}></input><br/>
                        <label>Price</label><br/>
                        <input value={this.state.vehiclePrice} onChange={event => this.setState({vehiclePrice: event.target.value})}></input><br/>
                        <label>Has app</label><br/>
                        <input type="checkbox" defaultChecked={this.state.vehicleHasApp} onChange={event => this.setState({vehicleHasApp: event.target.checked})}/><br/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }

}