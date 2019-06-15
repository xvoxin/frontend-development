import React, { Component } from 'react';
import { VehicleServce } from '../services/VehicleService'
import { VehicleList } from '../component/VehicleList'
import { VehicleDetails } from '../component/VehicleDetails'
import { Search } from './Search';
import { VehicleForm } from './VehicleForm';

export class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.title = props.title

        this.vehicleService = new VehicleServce()
        this.baseVehicles = []
        this.state = {
            vehicles: [],
            activeVehicle: -1,
            inEdit: false
        }
    }

    componentDidMount() {
        this.getVehicles()
    }

    hideEdit() {
        this.setState({inEdit: false})
    }

    async getVehicles() {
        var vehicles = await this.vehicleService.getVehicles()
        this.baseVehicles = vehicles
        this.setState({vehicles: vehicles})
        this.hideEdit()
    }

    onSearchChange = search => {
        if (search === "") {
            this.setState({vehicles: this.baseVehicles})
            return
        }
        var vehicles = []
        this.baseVehicles.forEach(element => {
            if (element.name.includes(search)) {
                vehicles.push(element)
            }
        })
        this.setState({vehicles: vehicles})
    }

    onEditClicked = () => {
        var edit = !this.inEdit
        this.setState({inEdit: edit})
    }

    onVehicleClicked = clickedVehicle => {
        this.setState({activeVehicle: clickedVehicle})
        this.hideEdit()
    }

    onEditSubmitted = async vehicle => {
        var vehicleName = this.baseVehicles[this.state.activeVehicle].name
        await this.vehicleService.updateVehicle(vehicle, vehicleName)
        this.getVehicles()
    }
    
    onSubmitClicked = async vehicle => {
        await this.vehicleService.addVehicle(vehicle)
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
                <Search onSearchChange={this.onSearchChange} />
                <VehicleList vehicles={this.state.vehicles} onClick={this.onVehicleClicked} />
                <VehicleDetails 
                    vehicle={this.state.vehicles[this.state.activeVehicle]} 
                    onDeleteClicked={this.onDeleteVehicleClicked} 
                    onEditClicked={this.onEditClicked}/>
                {this.state.inEdit ? <VehicleForm 
                    title="Edit" onSubmitClicked={this.onEditSubmitted}
                    vehicle={this.state.vehicles[this.state.activeVehicle]}/> 
                    : null}
                <VehicleForm title="Create" onSubmitClicked={this.onSubmitClicked} />
            </div>
        )
    }

}