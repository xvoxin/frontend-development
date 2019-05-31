
const axios = require('axios')
const URL = 'http://localhost:4000/api'

export class VehicleServce {

    async getVehicles() {
        return await axios.get(`${URL}/vehicles/all`)
            .then(res => res.data)
    }

    async addVehicle(vehicle) {
        return await axios.post(`${URL}/vehicles/create`, vehicle)
            .then(res => res.data)
    }

}