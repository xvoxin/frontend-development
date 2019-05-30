import React, { Component } from 'react';
const axios = require('axios')


export class VehicleComponent extends Component {

    handleSubmit = async (event) => {
        event.preventDefault()
        await axios.post(url: "http://localhost:4000/api/vehicles/", data: {xd: "xd"})
    }

    render() {
        return 
    }
t

}