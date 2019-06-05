
const axios = require('axios')
const URL = 'http://localhost:4000/api'

export class VehicleServce {

    async getVehicles() {
        return await axios.get(`${URL}/vehicles/all`)
            .then(res => res.data)
    }

    async addVehicle(vehicle) {
        return await axios.post(`${URL}/vehicles`, vehicle)
            .then(res => res.data)
    }

    async deleteVehicle(vehicleName) {
        return await axios.delete(`${URL}/vehicles/${vehicleName}`)
            .then(res => res.data)
    }

}