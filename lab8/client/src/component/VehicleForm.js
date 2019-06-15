import React, { Component } from 'react';
import { ElectricVehicle } from '../model/Vehicle';

export class VehicleForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            vehicleName: "",
            vehicleRange: "",
            vehiclePrice: "",
            vehicleHasApp: false
        }
    }

    applySelectedItem() {
        var vehicle = this.props.vehicle
        if (vehicle == null) return
        this.setState({
            vehicleName: vehicle.name,
            vehicleRange: vehicle.range,
            vehiclePrice: vehicle.price,
            vehicleHasApp: vehicle.hasApp
        })
    }

    componentDidMount() {
        this.applySelectedItem()
    }

    setDefaultState() {
        this.setState({
            vehicleName: "",
            vehicleRange: "",
            vehiclePrice: "",
            vehicleHasApp: ""
        })
    }

    onSubmitClicked = event => {
        event.preventDefault()
        this.setDefaultState()
        var vehicle = new ElectricVehicle(
            this.state.vehicleName,
            this.state.vehicleRange,
            this.state.vehiclePrice,
            this.state.vehicleHasApp
        )
        this.props.onSubmitClicked(vehicle)
    }

    render() {
        const title = this.props.title
        return (<div>
            <h2>{title}</h2>
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
        </div>)
    }
}